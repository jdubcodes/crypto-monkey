import { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  SvgIcon,
} from '@mui/material'
import {
  ArticleOutlined,
  CurrencyBitcoin,
  CurrencyExchange,
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
    icon: '',
    path: '/swap',
  },
]

const Layout = () => {
  return (
    <Box>
      {/* Used for mobile */}
      <AppBar position='static' elevation='1'>
        <Toolbar>
          <IconButton
            size='xlarge'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='primary'
            sx={{
              display: { lg: 'none' },
              color: '#393536',
            }}
          >
            <MenuIcon />
          </IconButton>
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
