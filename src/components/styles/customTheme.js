import { createTheme } from '@mui/material/styles'

// Colors ( pri = primary, sec = secondary)
const priColor = '#F5BB96'
const secColor = '#A46849'
const altColor = '#393536'
// const drkColor = '#421101'
const priBgColor = '#202020'
const secBgColor = '#FEF1EA'
const priTextColor = '#FEF1EA'
const secTextColor = '#202020'

const customTheme = createTheme({
  palette: {
    primary: {
      main: priColor,
    },
    secondary: {
      main: secColor,
    },
    text: {
      primary: priTextColor,
      secondary: secTextColor,
    },
    background: {
      paper: secBgColor,
      default: priBgColor,
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: secBgColor,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: secBgColor,
          },
        },
        colorPrimary: {
          color: secColor,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: secTextColor,
          fontWeight: 600,
          borderColor: altColor,
        },
        head: {
          padding: '6px 10px',
          borderTop: '1px solid #393536',
          fontSize: 12,
        },
        body: {
          padding: '24px 10px',
        },
      },
    },
  },
})

export default customTheme
