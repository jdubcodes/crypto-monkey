import { createTheme, ThemeProvider } from '@mui/material'

import Layout from './components/Layout'
import Carousel from './components/Carousel'

import './components/styles/App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FEF1EA',
      light: '#64b5f6',
      dark: '#2196f3',
    },
    secondary: {
      main: '#A46849',
      light: '#ec407a',
      dark: '#e91e63',
    },
    text: {
      primary: '#f2f2f2',
      secondary: '#393536',
    },
    background: {
      paper: '#FEF1EA',
      default: '#FEF1EA',
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <Carousel />
    </ThemeProvider>
  )
}

export default App
