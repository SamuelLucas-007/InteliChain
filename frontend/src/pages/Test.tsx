import { SimplePool, Event } from "nostr-tools";
import { Filter } from "nostr-tools/lib/filter";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import "../App.css";

import { useLocation } from "react-router";

import CreateNote from "../components/CreateNote";
import { insertEventIntoDescendingList } from "nostr-tools/utils";
import NotesList from "@/components/NotesList";

export const RELAYS = [
	"wss://nostr-pub.wellorder.net",
	"wss://nostr.mom",
	"wss://nostr.slothy.win",
	"wss://relay.damus.io",
	"wss://nostr.einundzwanzig.space",
	"wss://nos.lol",
	"wss://relay.nostr.band",
	"wss://global.relay.red",
	"wss://nostr.massmux.com",
	"wss://nostr.bongbong.com",
	"wss://relay.cryptocculture.com",
	"wss://relay.sendstr.com",
	"wss://knostr.neutrine.com",
	"wss://nostr-relay.schnitzel.world",
	"wss://nostr.nodeofsven.com",
	"wss://relay.nostr.ro",
	"wss://relay.nostrich.de",
	"wss://nostr.vulpem.com",
	"wss://nostr-verif.slothy.win",
];

interface Props {
  hashtag: string[];
}

export interface Metadata {
	name?: string;
	about?: string;
	picture?: string;
	nip05?: string;
}

export default function Test( {hashtag}: Props) {
  const location = useLocation();
  const path = location.pathname;

	const [pool, setPool] = useState<SimplePool | null>(null);

	const [eventsImmediate, setEvents] = useState<Event[]>([]);

	const [events] = useDebounce(eventsImmediate, 1500);

	const [metadata, setMetadata] = useState<Record<string, Metadata>>({});

	const metadataFetched = useRef<Record<string, boolean>>({});

	const hashtags = hashtag;

	// setup a relays pool

	useEffect(() => {
		const _pool = new SimplePool();
		setPool(_pool);

		return () => {
			_pool.close(RELAYS);
		};
	}, []);

	// subscribe to some events
	useEffect(() => {
		if (!pool) return;

		setEvents([]);
		const sub = pool.sub(RELAYS, [
			{
				kinds: [1],
				limit: 20,
				"#t": hashtags || hashtag,
			},
		]);

		sub.on("event", (event: Event) => {
			setEvents((events) => insertEventIntoDescendingList(events, event));
		});

		return () => {
			sub.unsub();
		};
		console.log(hashtags);
	}, [hashtags, pool]);

	useEffect(() => {
		if (!pool) return;

		const pubkeysToFetch = events
			.filter((event) => metadataFetched.current[event.pubkey] !== true)
			.map((event) => event.pubkey);

		pubkeysToFetch.forEach(
			(pubkey) => (metadataFetched.current[pubkey] = true)
		);

		const sub = pool.sub(RELAYS, [
			{
				kinds: [0],
				authors: pubkeysToFetch,
			},
		]);

		sub.on("event", (event: Event) => {
			const metadata = JSON.parse(event.content) as Metadata;

			setMetadata((cur) => ({
				...cur,
				[event.pubkey]: metadata,
			}));
		});

		sub.on("eose", () => {
			sub.unsub();
		});

		return () => {};
	}, [events, pool]);

	if (!pool) return null;
		return (
			<div className="w-full flex justify-center">
				<div className="flex flex-col items-center w-5/6">
					<NotesList notes={events} metadata={metadata} />
				</div>
			</div>
    );
}
