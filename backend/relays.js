const { relayInit, finishEvent, generatePrivateKey, getPublicKey } = require('nostr-tools');
require('websocket-polyfill');
const { SimplePool, Event } = require('nostr-tools');




async function interactWithRelay() {
    let relays = ["wss://nostr-pub.wellorder.net","wss://nostr.mom","wss://nostr.slothy.win","wss://relay.damus.io","wss://nostr.einundzwanzig.space","wss://nos.lol","wss://relay.nostr.band","wss://global.relay.red","wss://nostr.massmux.com","wss://nostr.bongbong.com","wss://relay.cryptocculture.com","wss://relay.sendstr.com","wss://knostr.neutrine.com","wss://nostr-relay.schnitzel.world","wss://nostr.nodeofsven.com","wss://relay.nostr.ro","wss://relay.nostrich.de","wss://nostr.vulpem.com","wss://nostr-verif.slothy.win", "wss://sg.qemura.xyz","wss://nostr.massmux.com","wss://nostr.terminus.money","wss://nostr.cheeserobot.org","wss://nostr.thank.eu","wss://nostr.blockpower.capital","wss://relay.nostrview.com","wss://paid.spore.ws","wss://nostr.l00p.org","wss://nostr.notmyhostna.me","wss://nostr.zkid.social","wss://nostr21.com","wss://nostrich.friendship.tw","wss://nostr.ch3n2k.com","wss://bitcoinmaximalists.online","wss://private.red.gb.net","wss://offchain.pub"];
    //const relay = relayInit('wss://nostr-pub.wellorder.net');
    const pool = new SimplePool();

    const sub = pool.sub(relays, [
        {
          kinds: [1],
          limit: 100,
          "#t": [ 'news' ],
        },
      ]);
    // Let's query for an event that exists
    sub.on("event", (event) => {
        console.log(event);
      });
    sub.on('eose', () => {
        sub.unsub();
    });

    // Let's publish a new event while simultaneously monitoring the relay for it
    let privateKey = generatePrivateKey();
    let publicKey = getPublicKey(privateKey);

    let subPublish = pool.sub([
        {
            kinds: [1],
            authors: [publicKey],
        },
    ]);

    subPublish.on('event', event => {
        console.log('got event:', event.content);
    });

    let newEvent = {
        kind: 1,
        created_at: Math.floor(Date.now() / 1000),
        tags: [['t', 'URI']],
        content: 'URIII pig',
    };

    // This assigns the pubkey, calculates the event id and signs the event in a single step
    const signedEvent = finishEvent(newEvent, privateKey);
    let pubs = pool.publish(relays, signedEvent)
    await Promise.all(pubs)

    let events = await pool.list(relays, [{ kinds: [0, 1] }]);
    let retrievedEvent = await pool.get(relays,{
        ids: ['44e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245'],
    });

    let batchedEvents = await pool.batchedList('notes', relays, [{ kinds: [1] }])
    let relaysForEvent = pool.seenOn('44e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245')
    pool.close();
}

interactWithRelay().catch(error => {
    console.error(error);
});