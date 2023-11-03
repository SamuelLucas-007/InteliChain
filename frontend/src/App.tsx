import './App.css'
import AppRoutes from './Routes/AppRoute'

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

function App({ children }: { children: React.ReactNode }) {
  return (
      <AppRoutes />
  )
}

export default App
