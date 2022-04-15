import { useState, useEffect } from 'react'
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Container } from '@mui/material'

const Carousel = () => {
  const [trendingCoins, setTrendingCoins] = useState([])

  const fetchTrendingCoinIds = async () => {
    const trendingCoinDataUrl = (ids) =>
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`

    const { data } = await axios(`${process.env.REACT_APP_TRENDING_COINS_URL}`)

    const trendingCoinIds = data.coins.map((coin) => coin.item.id)

    const trendingCoins = await axios(
      trendingCoinDataUrl(trendingCoinIds.toString())
    )
    console.log(trendingCoins.data)

    setTrendingCoins(trendingCoins.data)
  }

  useEffect(() => {
    fetchTrendingCoinIds()
  }, [])

  const coins = trendingCoins.map((coin) => {
    return (
      <div
        style={{
          cursor: 'pointer',
        }}
      >
        <img
          src={coin?.image}
          alt={coin.symbol}
          height='40'
          style={{ marginBottom: 10 }}
        />
      </div>
    )
  })

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 10,
    },
  }

  return (
    <Container
      sx={{
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        p: 0,
      }}
    >
      <AliceCarousel
        mouseTracking
        infinite
        animationDuration={3000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={coins}
        autoPlay
      />
    </Container>
  )
}

export default Carousel
