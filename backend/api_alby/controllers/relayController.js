const {
	relayInit,
	finishEvent,
	generatePrivateKey,
	getPublicKey,
} = require("nostr-tools");
require("websocket-polyfill");
const { SimplePool, Event } = require("nostr-tools");

const relays = [
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

const pool = new SimplePool();

async function getFromNetwork(req, res) {
	const sub = pool.sub(relays, [
		{
			kinds: [1],
			limit1: 100,
		},
	]);

	let events = [];

	sub.on("event", (event) => {
		events.push(event);
		console.log(event);
	});

	sub.on("eose", () => {
		sub.unsub();
		res.status(200).json(events);
	});
}

async function sendToNetwork(req, res) {
	try {
		const { kind, tags, content } = req.body;

		if (kind !== undefined && Array.isArray(tags) && content !== undefined) {
			let privateKey = generatePrivateKey();
			let publicKey = getPublicKey(privateKey);

			let subPublish = pool.sub([
				{
					kinds: [1],
					authors: [publicKey],
				},
				console.log(publicKey),
			]);

			subPublish.on("event", (event) => {
				console.log("got event:", event.content);
			});

			let newEvent = {
				kind: 1,
				created_at: Math.floor(Date.now() / 1000),
				tags: [["t", "URI"]],
				content: "URIII pig",
			};

			const signedEvent = finishEvent(newEvent, privateKey);
			let pubs = pool.publish(relays, signedEvent);
			await Promise.all(pubs);
			let events = await pool.list(relays, [{ kinds: [0, 1] }]);
			let retrievedEvent = await pool.get(relays, {
				ids: [
					"44e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245",
				],
			});

			let batchedEvents = await pool.batchedList("notes", relays, [
				{ kinds: [1] },
			]);
			let relaysForEvent = pool.seenOn(
				"44e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245"
			);
			pool.close();
		} else {
			res.status(400).json({ message: "Missing parameters" });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = { getFromNetwork, sendToNetwork };
