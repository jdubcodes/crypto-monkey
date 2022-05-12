// Routing
import { Routes, Route } from 'react-router-dom'
// Custom styling imports
import { ThemeProvider } from '@mui/material'
import customTheme from './components/styles/customTheme'
// Components
import Layout from './components/Layout'
import MarqueeScroll from './components/MarqueeScroll'
import Homepage from './components/pages/Homepage'
import CryptoNews from './components/pages/CryptoNews'
import MonkeySwap from './components/pages/MonkeySwap'
import CoinsTable from './components/pages/CoinsTable'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Layout />
      <MarqueeScroll />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cryptos' element={<CoinsTable />} />
        <Route path='/news' element={<CryptoNews />} />
        <Route path='/swap' element={<MonkeySwap />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
