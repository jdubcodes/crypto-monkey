import { useState, useEffect } from 'react'
import axios from 'axios'
import Marquee from 'react-fast-marquee'
import { Box, Container, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import marqueeBg from '../images/marqueeBg.svg'

const MarqueeScroll = () => {
  const [trendingCoins, setTrendingCoins] = useState([])

  const fetchTrendingCoinIds = async () => {
    const trendingCoinDataUrl = (ids) =>
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`

    const { data } = await axios(`${process.env.REACT_APP_TRENDING_COINS_URL}`)

    const trendingCoinIds = data.coins.map((coin) => coin.item.id)

    const trendingCoins = await axios(
      trendingCoinDataUrl(trendingCoinIds.toString())
    )

    setTrendingCoins(trendingCoins.data)
  }

  useEffect(() => {
    fetchTrendingCoinIds()
  }, [])

  return (
    <Marquee
      pauseOnHover='true'
      gradientWidth='0'
      speed='50'
      style={{
        background: `url(${marqueeBg})`,
        fontFamily: `'Poppins', sans-serif`,
        color: '#FEF1EA',
      }}
    >
      {trendingCoins.map((coin) => {
        let increase = coin.price_change_percentage_24h > 0

        return (
          <Container
            key={coin.symbol}
            sx={{
              p: 1,
              m: 0,
              display: 'flex',
              alignItems: 'center',
              borderRight: '1px solid #845339',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#340E01',
              },
            }}
          >
            <img
              src={coin.image}
              alt={coin.symbol}
              style={{
                height: '25px',
                marginRight: '10px',
                borderRadius: '50%',
                filter: 'brightness(0.9)',
              }}
            />
            <Typography noWrap variant='body' sx={{ mr: 1 }}>
              {coin.name}
            </Typography>
            <Typography variant='body' sx={{ mr: 1 }}>
              ${coin.current_price.toFixed(2)}
            </Typography>
            <Typography
              variant='body'
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: increase ? '#81c784' : '#e57373',
              }}
            >
              {increase ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              <Box sx={{ marginLeft: '-3px' }}>
                {increase
                  ? coin.price_change_percentage_24h.toFixed(2)
                  : coin.price_change_percentage_24h.toFixed(2).slice(1)}
                %
              </Box>
            </Typography>
          </Container>
        )
      })}
    </Marquee>
  )
}

export default MarqueeScroll
