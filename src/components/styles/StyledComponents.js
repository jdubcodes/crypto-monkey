import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

// Colors ( pri = primary, sec = secondary)
const priColor = '#F5BB96'
// const secColor = '#A46849'
const altColor = '#393536'
const drkColor = '#421101'
// const priBgColor = '#202020'
// const secBgColor = '#FEF1EA'
// const priTextColor = '#FEF1EA'
// const secTextColor = '#202020'

// Layout styles
export const LogoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  [theme.breakpoints.up('lg')]: {
    position: 'static',
    left: 0,
    transform: 'translate(0)',
  },
}))

export const Logo = styled(Box)(({ theme }) => ({
  marginRight: [theme.spacing(1)],
  [theme.breakpoints.up('xs')]: {
    height: 45,
  },
  [theme.breakpoints.up('sm')]: {
    height: 50,
  },
  [theme.breakpoints.up('md')]: {
    height: 60,
  },
}))

export const LogoText = styled(Box)(({ theme }) => ({
  height: 24,
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}))

export const DrawerList = styled(List)(({ theme }) => ({
  marginTop: [theme.spacing(3)],
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  a: {
    width: '100%',
  },
}))

export const DrawerWalletButton = styled(Button)(({ theme }) => ({
  marginBottom: [theme.spacing(4)],
  fontWeight: 700,
  color: drkColor,
  '&:hover': {
    backgroundColor: priColor,
    borderColor: priColor,
  },
  [theme.breakpoints.up('xs')]: {
    display: 'block',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))

export const ListItemButton = styled(ListItem)({
  '> *': {
    color: altColor,
  },
  '&:hover': {
    backgroundColor: priColor,
  },
})

export const ListItemButtonText = styled(ListItemText)(({ theme }) => ({
  marginLeft: [theme.spacing(-2)],
  '.MuiTypography-root': {
    fontWeight: 600,
  },
}))

export const DesktopWalletButton = styled(Button)(({ theme }) => ({
  marginLeft: 'auto',
  color: altColor,
  fontSize: '1rem',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: priColor,
    borderColor: priColor,
  },
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}))

export const DesktopButton = styled(Button)(({ theme }) => ({
  paddingLeft: [theme.spacing(2)],
  paddingRight: [theme.spacing(2)],
  color: drkColor,
  fontSize: '1rem',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: 'transparent',
    color: priColor,
  },
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'inline-flex',
  },
}))

// Marquee styles
export const MarqueeContainer = styled(Container)(({ theme }) => ({
  margin: [theme.spacing(0)],
  padding: [theme.spacing(1)],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '1px solid #845339',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#340E01',
  },
}))

export const MarqueeLogo = styled(Box)({
  height: '25px',
  marginRight: '10px',
  borderRadius: '50%',
  filter: 'brightness(0.9)',
})

// Table styles
export const CoinNameBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  '.MuiTypography-body1': {
    fontSize: 14,
    lineHeight: 1,
  },
})

export const CoinLogo = styled(Box)({
  height: 24,
  marginRight: 8,
  borderRadius: '50%',
})

// Global components
export const ProfitText = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
})
