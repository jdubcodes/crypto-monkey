import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// MUI Components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemText from '@mui/material/ListItemText'
// MUI Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
// import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined'
// Custom Styled Components
import {
  CoinInfoContainer,
  TopSummaryBox,
  NameSection,
  CoinNameWrapper,
  CoinNameText,
  CoinSymbol,
  PriceSection,
} from '../styles/StyledComponents'

const CoinInfo = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState([])

  const singleCoinUrl = (id) =>
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&community_data=false&developer_data=false`

  const fetchCoinInfo = async () => {
    const { data } = await axios(singleCoinUrl(id))

    setCoin(data)
    console.log(data)
  }

  useEffect(() => {
    fetchCoinInfo()
  }, [])
  return (
    <CoinInfoContainer
      className='main-page-container'
      sx={{
        border: '1px solid red',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <TopSummaryBox>
        <NameSection>
          <Box
            className='coin-img'
            component='img'
            src={coin.image.small}
            alt={coin.id}
            sx={{ width: '32px', height: '32px' }}
          />
          <CoinNameWrapper>
            <CoinNameText component='h2'>{coin.name}</CoinNameText>
            <CoinSymbol variant='body2' component='small'>
              {coin.symbol.toUpperCase()}
            </CoinSymbol>
          </CoinNameWrapper>
          <FavoriteBorderOutlinedIcon
            className='watchlist'
            sx={{
              fontSize: 20,
              marginLeft: 1,
              '&:hover': {
                color: '#F5BB96',
                cursor: 'pointer',
              },
            }}
          />
        </NameSection>
        <PriceSection>
          <Typography
            className='coin-name coin-symbol'
            component='h1'
          ></Typography>
          <div className='coin-price seven-days-profit'></div>
          <div classname='low-to-high'></div>
        </PriceSection>
        <div className='links'>
          <div className='github-link'></div>
          <div className='homepage'></div>
          <div className='reddit-link'></div>
        </div>
        <div className='coin-stats'>
          <div className='market-cap'></div>
          <div className='fully-diluted-market-cap'></div>
          <div className='volume'></div>
          <div className='circulating-supply'></div>
        </div>
      </TopSummaryBox>
      <Box className='coin-chart' sx={{ border: '1px dotted green' }}></Box>
    </CoinInfoContainer>
  )
}

export default CoinInfo
