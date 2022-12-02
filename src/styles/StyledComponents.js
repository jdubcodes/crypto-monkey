// MUI components
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'

// Colors
const priColor = '#F5BB96'
const altColor = '#393536'
const drkColor = '#421101'

// Global components
export const ProfitText = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
})

// Navbar styles
export const LogoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    left: '0%',
    transform: 'translateX(0)',
  },
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
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
    display: 'block',
  },
  [theme.breakpoints.up('sm')]: {
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

// Heading styles
export const SectionHeading = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: 18,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: 20,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 22,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 24,
  },
  color: '#421101',
}))

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

// News articles styles
export const ArticlesContainer = styled(Container)({
  margin: 'auto',
  height: 198,
})

// News card styles
export const FiCard = styled(Card)({
  width: '100%',
  boxShadow: 'none',
  backgroundColor: 'transparent',
})

export const FiCardActionArea = styled(CardActionArea)({
  border: 'none',
  borderRadius: '8px',
  overflow: 'hidden',
})

export const FiCardMedia = styled(CardMedia)({
  height: 160,
  objectFit: 'cover',
})

export const NewsHeadlineBox = styled(Box)({
  width: '100%',
  height: '43%',
  position: 'absolute',
  bottom: '0',
  backgroundColor: 'rgba(34, 34, 34, 88%)',
  overflow: 'hidden',
})

export const FiCardContent = styled(CardContent)({
  paddingTop: 3,
  paddingLeft: 3,
  paddingBottom: 0,
  height: '100%',
  width: '100%',
})

export const ArticleTitle = styled(Typography)({
  paddingLeft: '5px',
  color: '#ffcba8',
  fontSize: '15px',
  fontWeight: '300',
  lineHeight: '1.4',
})

// CoinInfo page styles
export const CoinInfoContainer = styled(Container)({
  paddingTop: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
})

export const TopSummaryBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('xs')]: {
    padding: '5px 0 15px',
    flexDirection: 'column',
    gap: '15px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '5px 0 24px',
    flexDirection: 'row',
    gap: 0,
  },
}))

export const NameSection = styled(Box)({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  flex: '0 0 50%',
})

export const CoinNameWrapper = styled(Box)({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
})

export const CoinIcon = styled(Box)({
  height: 32,
  width: 32,
  borderRadius: '50%',
})

export const CoinName = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: '600',
  [theme.breakpoints.up('xs')]: {
    display: 'block',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}))

export const CoinSymbol = styled(Typography)({
  padding: '2px 5px',
  fontSize: '14px',
  fontWeight: '500',
  backgroundColor: '#ffddc7',
  borderRadius: '4px',
})

export const CoinRank = styled(Typography)(({ theme }) => ({
  padding: '2px 6px',
  backgroundColor: 'rgb(145 148 153)',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: '500',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const PriceSection = styled(Box)({})

export const PriceHeading = styled(Typography)({
  fontSize: 12,
  fontWeight: '600',
  color: 'rgb(92 95 100)',
})

export const PriceTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'space-between',
  },
}))

export const PriceValue = styled(Box)({
  paddingRight: '10px',
  fontSize: '32px',
  fontWeight: '600',
  fontFamily: 'Poppins',
})

export const PriceMovement = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '5px 10px 5px 3px',
  borderRadius: '8px',
  color: 'rgb(255,246,241)',
  fontFamily: 'Poppins',
  fontWeight: '500',
  fontSize: '14px',
})

export const StatsSection = styled(Box)({})

export const StatsContainer = styled(Box)(({ theme }) => ({
  padding: '24px 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  borderTop: '1px solid rgb(223, 215, 215)',
  borderBottom: '1px solid rgb(223, 215, 215)',
  [theme.breakpoints.down('md')]: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottom: 'none',
  },
}))

export const StatsBlock = styled(Box)(({ theme }) => ({
  marginRight: '28px',
  display: 'flex',
  flexDirection: 'column',
  gridColumn: 'span 3 / auto',
  minWidth: '200px',
  borderRight: '1px solid rgb(223, 215, 215)',
  [theme.breakpoints.down('md')]: {
    margin: '0',
    padding: '15px 0',
    borderRight: 'none',
    borderBottom: '1px solid rgb(223, 215, 215)',
  },
}))

export const StatsBlockInner = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginTop: 0,
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
}))

export const StatsInnerLabel = styled(Typography)(({ theme }) => ({
  paddingBottom: '3px',
  fontSize: '13px',
  fontWeight: '500',
  color: '#726b69',
  [theme.breakpoints.down('md')]: {
    marginRight: 'auto',
  },
}))

export const StatsInnerValue = styled(Typography)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: '600',
  color: '#393536',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    fontWeight: '500',
    order: '2',
  },
}))

export const StatsPriceChange = styled(Typography)({
  marginLeft: '-5px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '13px',
  fontWeight: '600',
})

export const StatsInnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const ChartSection = styled(Box)({
  paddingTop: '24px',
})

export const ChartHeadingWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '5px',
  },
}))

export const ChartButtonWrapper = styled(Box)(({ theme }) => ({
  height: '32px',
  padding: '2px 8px',
  display: 'flex',
  backgroundColor: 'rgb(254, 241, 234)',
  borderRadius: '8px',
  [theme.breakpoints.down('sm')]: {
    alignSelf: 'center',
    marginBottom: '10px',
    justifyContent: 'space-around',
    width: '100%',
  },
}))

export const ChartButtonList = styled(List)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  [theme.breakpoints.down('sm')]: {
    gap: '10px',
  },
}))

export const ChartButton = styled(Box)({
  padding: '2px 5px',
  borderRadius: '5px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgb(255,221,199)',
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
  },
})

export const ChartWrapper = styled(Box)(({ theme }) => ({
  height: '398px',
  [theme.breakpoints.up('sm')]: {
    height: '498px',
  },
  [theme.breakpoints.up(1920)]: {
    height: '598px',
  },
}))
