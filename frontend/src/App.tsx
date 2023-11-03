import './App.css'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'

function App({ children }: { children: React.ReactNode }) {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <ModeToggle />
    </ThemeProvider>
  )
}

export default App
