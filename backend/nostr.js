const { generatePrivateKey, getPublicKey } = require('nostr-tools');
const { validateEvent, verifySignature, getSignature, getEventHash} = require('nostr-tools');

let sk = generatePrivateKey(); // `sk` is a hex string
let pk = getPublicKey(sk); // `pk` is a hex string

console.log(sk)
console.log(pk)

let privateKey = sk; // Substitua com sua chave privada real

let event = {
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'PHD falando notícias da ditadura cubana',
  pubkey: getPublicKey(privateKey),
};

event.id = getEventHash(event);
event.sig = getSignature(event, privateKey);

let ok = validateEvent(event);
let veryOk = verifySignature(event);

console.log('Is event valid?', ok);
console.log('Is signature valid?', veryOk);
console.log('a postagem foi:', event.content)