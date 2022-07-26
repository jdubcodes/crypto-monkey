// Smooth Scroll
import { Scrollbar } from 'smooth-scrollbar-react'
// Custom styling imports
import { ThemeProvider } from '@mui/material'
import customTheme from './components/styles/customTheme'
// Components
import Navbar from './components/Navbar'
import MarqueeScroll from './components/MarqueeScroll'
import Homepage from './components/pages/Homepage'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Scrollbar damping={0.9}>
        <Navbar />
        <MarqueeScroll />
        <Homepage />
      </Scrollbar>
    </ThemeProvider>
  )
}

export default App
