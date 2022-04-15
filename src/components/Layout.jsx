import { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material'
import {
  ArticleOutlined,
  CurrencyBitcoin,
  CurrencyExchange,
  SwapHorizOutlined,
} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'

import logo from '../images/logo.png'
import logoText from '../images/logoText.png'

const menuItems = [
  {
    text: 'Cryptocurrencies',
    icon: <CurrencyBitcoin />,
    path: '/',
  },
  {
    text: 'Crypto News',
    icon: <ArticleOutlined />,
    path: '/news',
  },
  {
    text: 'Monkey Swap',
    icon: <SwapHorizOutlined />,
    path: '/swap',
  },
]

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
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='xlarge'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='primary'
            onClick={toggleDrawer(true)}
            sx={{
              display: { lg: 'none' },
              color: '#393536',
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* Mobile drawer */}
          <SwipeableDrawer
            anchor='left'
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Box
              sx={{ width: 220 }}
              role='presentation'
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List
                sx={{
                  mt: 2,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                {/* Placeholder for wallet connect button */}
                <Button
                  variant='outlined'
                  color='secondary'
                  size='small'
                  sx={{
                    mb: 6,
                    display: { xs: 'block', sm: 'none' },
                    color: '#393536',
                    fontWeight: '600',
                    '&:hover': {
                      backgroundColor: '#F5BB96',
                      borderColor: '#F5BB96',
                    },
                  }}
                >
                  Connect Wallet
                </Button>
                {menuItems.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    sx={{
                      '> *': {
                        color: '#393536',
                      },
                      '&:hover': {
                        backgroundColor: '#F5BB96',
                      },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        ml: -2,
                        '.MuiTypography-root': {
                          fontWeight: '500',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </SwipeableDrawer>
          <Box
            sx={{
              position: { xs: 'fixed', lg: 'static' },
              left: { xs: '50%', lg: '0' },
              transform: { xs: 'translateX(-50%)', lg: 'translate(0)' },
              display: 'flex',
              alignItems: 'center',
              'MuiBox-root': {
                padding: '0',
              },
            }}
          >
            <Box
              component='img'
              src={logo}
              alt='logo'
              sx={{
                height: { xs: '45px', sm: '50px', md: '60px' },
                my: 1,
                mr: 1,
              }}
            />
            <Box
              component='img'
              src={logoText}
              sx={{
                height: '24px',
                display: { xs: 'none', md: 'flex' },
              }}
            />
          </Box>
          {/* Desktop links */}
          <Box
            sx={{
              position: 'fixed',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                sx={{
                  mx: 1,
                  display: { xs: 'none', lg: 'inline-flex' },
                  color: '#421100',
                  fontSize: '1rem',
                  fontWeight: '600',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#f5BB96',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          {/* Placeholder for wallet connect button */}
          <Button
            variant='outlined'
            color='secondary'
            size='large'
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: '#393536',
              marginLeft: 'auto',
              fontSize: '1rem',
              fontWeight: '600',
              '&:hover': {
                backgroundColor: '#F5BB96',
                borderColor: '#F5BB96',
              },
            }}
          >
            Connect Wallet
          </Button>
          <CurrencyExchange
            sx={{
              marginLeft: 'auto',
              display: { sm: 'none' },
              color: '#393536',
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Layout
