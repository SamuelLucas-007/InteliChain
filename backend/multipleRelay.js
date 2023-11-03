const NostrTools = require('nostr-tools');
const SimplePool = NostrTools.SimplePool;

const pool = new SimplePool();

let relays =  [
    "wss://nostr-pub.wellorder.net",
    "wss://nostr.drss.io",
    "wss://nostr.swiss-enigma.ch",
  ];

let sub = pool.sub(
  [...relays, "wss://relay.damus.io"],
  [
    {
      authors: ['32e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245'],
    },
  ],
)

sub.on('event', event => {
    console.log('we got the event we wanted:', event.pubkey);
})

let pubs = pool.publish(relays, newEvent)
await Promise.all(pubs)

let events = await pool.list(relays, [{ kinds: [0, 1] }])
let event = await pool.get(relays, {
  ids: ['44e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245'],
})

let batchedEvents = await pool.batchedList('notes', relays, [{ kinds: [1] }])
// `batchedList` will wait for other function calls with the same `batchKey`
// (e.g. 'notes', 'authors', etc) within a fixed amount of time (default: `100ms`) before sending
// next ws request, and batch all requests with similar `batchKey`s together in a single request.

let relaysForEvent = pool.seenOn('44e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245')
// relaysForEvent will be an array of URLs from relays a given event was seen on

pool.close()