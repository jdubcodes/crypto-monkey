import { Link } from 'react-router-dom'
// MUI Components
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
// MUI Icons
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
// Custom styled components
import {
  LogoBox,
  Logo,
  LogoText,
  DesktopWalletButton,
} from '../styles/StyledComponents'
// Images
import logo from '../images/logo.png'
import logoText from '../images/logoText.png'

const Navbar = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          {/* Logo display for all screens */}
          <LogoBox>
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
              <Logo component='img' src={logo} alt='Crypto Monkey' />
              <LogoText component='img' src={logoText} alt='logo text' />
            </Link>
          </LogoBox>
          {/* Button for wallet connect on small screens */}
          <AccountBalanceWalletOutlinedIcon
            sx={{
              marginLeft: 'auto',
              display: { sm: 'none' },
              color: '#421101',
            }}
          />
          {/* Placeholder for wallet connect button on large screens */}
          <DesktopWalletButton
            variant='outlined'
            color='secondary'
            size='large'
          >
            Connect Wallet
          </DesktopWalletButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Navbar
