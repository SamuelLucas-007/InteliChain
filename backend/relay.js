const { relayInit, finishEvent, generatePrivateKey, getPublicKey } = require('nostr-tools');
require('websocket-polyfill');


async function interactWithRelay() {
  const relay = relayInit('wss://nostr-pub.wellorder.net');
  relay.on('connect', () => {
    console.log(`connected to ${relay.url}`);
  });
  relay.on('error', () => {
    console.log(`failed to connect to ${relay.url}`);
  });

  await relay.connect();

  // Let's query for an event that exists
  let subQuery = relay.sub([
    {
        kinds:[1],
        limit: 5,
        "#t": [ 'PHDINTELI' ],
    },
  ]);
  subQuery.on('event', event => {
    console.log('we got the event we wanted:', event.content);
  });
  subQuery.on('eose', () => {
    subQuery.unsub();
  });

  // Let's publish a new event while simultaneously monitoring the relay for it
  let privateKey = generatePrivateKey();
  let publicKey = getPublicKey(privateKey);

  let subPublish = relay.sub([
    {
      kinds: [1],
      authors: [publicKey],
    },
  ]);

  subPublish.on('event', event => {
    console.log('got event:', event);
  });

  let newEvent = {
    kind: 1,
    created_at: Math.floor(Date.now() / 1000),
    tags: [['t','PHDINTELI']],
    content: 'Inteli blockchain will gain the satsconf',
  };
  
  // This assigns the pubkey, calculates the event id and signs the event in a single step
  const signedEvent = finishEvent(newEvent, privateKey);
  await relay.publish(signedEvent);

  let events = await relay.list([{ kinds: [0, 1] }]);
  let retrievedEvent = await relay.get({
    ids: ['44e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245'],
  });

  relay.close();
}

interactWithRelay().catch(error => {
  console.error(error);
});
