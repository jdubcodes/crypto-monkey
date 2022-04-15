import { useState } from 'react'
// MUI Components
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import ListItemIcon from '@mui/material/ListItemIcon'
// MUI Icons
import CurrencyExchange from '@mui/icons-material/CurrencyExchange'
import MenuIcon from '@mui/icons-material/Menu'
// Config files
import menuItems from '../config/menuItems'
// Custom styled components
import {
  LogoBox,
  Logo,
  LogoText,
  DrawerList,
  DrawerWalletButton,
  ListItemButton,
  ListItemButtonText,
  DesktopWalletButton,
  DesktopButton,
} from '../components/styles/StyledComponents'
// Images
import logo from '../images/logo.png'
import logoText from '../images/logoText.png'

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setDrawerOpen(open)
  }

  return (
    <Box>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            size='xlarge'
            onClick={toggleDrawer(true)}
            sx={{
              display: { lg: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
          <LogoBox>
            <Logo component='img' src={logo} alt='Crypto Monkey' />
            <LogoText component='img' src={logoText} alt='logo text' />
          </LogoBox>
          {/* Mobile drawer */}
          <SwipeableDrawer
            anchor='left'
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Box
              role='presentation'
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              sx={{ width: 220 }}
            >
              <DrawerList>
                {/* Placeholder for wallet connect button */}
                <DrawerWalletButton
                  variant='outlined'
                  color='secondary'
                  size='small'
                >
                  Connect Wallet
                </DrawerWalletButton>
                {/* Display all menu items */}
                {menuItems.map((item) => (
                  <ListItemButton button key={item.text}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemButtonText primary={item.text} />
                  </ListItemButton>
                ))}
              </DrawerList>
            </Box>
          </SwipeableDrawer>
          <CurrencyExchange
            sx={{
              marginLeft: 'auto',
              display: { sm: 'none' },
              color: '#393536',
            }}
          />
          {/* Desktop links */}
          <Box
            sx={{
              position: 'fixed',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {/* Display desktop links */}
            {menuItems.map((item) => (
              <DesktopButton key={item.text}>{item.text}</DesktopButton>
            ))}
          </Box>
          {/* Placeholder for wallet connect button */}
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
export default Layout
