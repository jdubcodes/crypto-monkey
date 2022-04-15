// Routing
import { Routes, Route } from 'react-router-dom'
// Custom styling imports
import { ThemeProvider } from '@mui/material'
import customTheme from './config/customTheme'
// Components
import Layout from './components/Layout'
import MarqueeScroll from './components/MarqueeScroll'
import CoinTable from './components/pages/CoinTable'
import News from './components/pages/News'
import MonkeySwap from './components/pages/MonkeySwap'

import './components/styles/App.css'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Layout />
      <MarqueeScroll />
      <Routes>
        <Route path='/' element={<CoinTable />} />
        <Route path='/news' element={<News />} />
        <Route path='/swap' element={<MonkeySwap />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
