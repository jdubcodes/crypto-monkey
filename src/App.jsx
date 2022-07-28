import { Route, Routes } from 'react-router-dom'
// Smooth Scroll
import { Scrollbar } from 'smooth-scrollbar-react'
// Custom styling imports
import { ThemeProvider } from '@mui/material'
import customTheme from './components/styles/customTheme'
// Components
import Navbar from './components/Navbar'
import MarqueeScroll from './components/MarqueeScroll'
import Homepage from './components/pages/Homepage'
import CoinInfo from './components/pages/CoinInfo'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Scrollbar damping={0.9}>
        <Navbar />
        <MarqueeScroll />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/:id' element={<CoinInfo />} />
        </Routes>
      </Scrollbar>
    </ThemeProvider>
  )
}

export default App
