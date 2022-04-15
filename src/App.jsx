import { ThemeProvider } from '@mui/material'
import customTheme from './config/customTheme'

// Components
import Layout from './components/Layout'
import MarqueeScroll from './components/MarqueeScroll'

import './components/styles/App.css'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Layout />
      <MarqueeScroll />
    </ThemeProvider>
  )
}

export default App
