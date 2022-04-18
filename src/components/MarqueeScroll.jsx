import { useState, useEffect } from 'react'
import axios from 'axios'
import Marquee from 'react-fast-marquee'
import { Box, Typography } from '@mui/material'
// MUI Icons
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
// Custom styled components
import {
  MarqueeContainer,
  MarqueeLogo,
  ProfitText,
} from '../components/styles/StyledComponents'

import marqueeBg from '../images/marqueeBg.svg'

const MarqueeScroll = () => {
  const [trendingCoins, setTrendingCoins] = useState([])

  const fetchTrendingCoins = async () => {
    const trendingCoinDataUrl = (ids) =>
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`
    // Fetch which coins are trending
    const { data } = await axios(`${process.env.REACT_APP_TRENDING_COINS_URL}`)
    // Get trending coin id's to fetch more data
    const trendingCoinIds = data.coins.map((coin) => coin.item.id)
    // Fetch data needed for marquee
    const trendingCoinsData = await axios(
      trendingCoinDataUrl(trendingCoinIds.toString())
    )

    setTrendingCoins(trendingCoinsData.data)
  }

  useEffect(() => {
    fetchTrendingCoins()
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
      {/* Map over trending coins endpoint to display in marquee */}
      {trendingCoins.map((coin) => {
        let increase = coin.price_change_percentage_24h > 0

        return (
          <MarqueeContainer key={coin.symbol}>
            <MarqueeLogo component='img' src={coin.image} alt={coin.symbol} />
            <Typography noWrap variant='body' sx={{ mr: 1 }}>
              {coin.name}
            </Typography>
            <Typography variant='body' sx={{ mr: 1 }}>
              ${coin.current_price.toFixed(2)}
            </Typography>
            <ProfitText
              variant='body'
              sx={{ color: increase ? '#81c784' : '#e57373' }}
            >
              {increase ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              <Box sx={{ marginLeft: '-3px' }}>
                {increase
                  ? coin.price_change_percentage_24h.toFixed(2)
                  : coin.price_change_percentage_24h.toFixed(2).slice(1)}
                %
              </Box>
            </ProfitText>
          </MarqueeContainer>
        )
      })}
    </Marquee>
  )
}

export default MarqueeScroll
