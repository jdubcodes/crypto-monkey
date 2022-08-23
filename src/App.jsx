import { Route, Routes } from 'react-router-dom'
// Smooth Scroll
import { Scrollbar } from 'smooth-scrollbar-react'
// Custom styling imports
import { ThemeProvider } from '@mui/material'
import customTheme from './styles/customTheme'
// Components
import Navbar from './components/Navbar'
import MarqueeScroll from './components/MarqueeScroll'
import Homepage from './pages/Homepage'
import CoinInfo from './pages/CoinInfo'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Scrollbar damping={0.9}>
        <Navbar />
        <MarqueeScroll />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/coins/:id' element={<CoinInfo />} />
        </Routes>
      </Scrollbar>
    </ThemeProvider>
  )
}

export default App
