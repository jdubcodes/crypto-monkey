// Routing
import { Routes, Route } from 'react-router-dom'
// Custom styling imports
import { ThemeProvider } from '@mui/material'
import customTheme from './components/styles/customTheme'
// Components
import Layout from './components/Layout'
import MarqueeScroll from './components/MarqueeScroll'
import CoinsTable from './components/pages/CoinsTable'
import News from './components/pages/News'
import MonkeySwap from './components/pages/MonkeySwap'
import TableChart from './components/TableChart'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Layout />
      <MarqueeScroll />
      <Routes>
        <Route path='/' element={<CoinsTable />} />
        <Route path='/news' element={<News />} />
        <Route path='/swap' element={<MonkeySwap />} />
        <Route path='/chart' element={<TableChart />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
