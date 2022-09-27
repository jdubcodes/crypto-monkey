import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// MUI Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
// MUI Components
import Typography from '@mui/material/Typography'
// Custom Styled Components
import {
  CoinInfoContainer,
  TopSummaryBox,
  NameSection,
  CoinNameWrapper,
  CoinName,
  CoinSymbol,
  CoinRank,
  CoinIcon,
  PriceSection,
  CoinPrice,
} from '../styles/StyledComponents'

const CoinInfo = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState()

  const singleCoinUrl = (id) =>
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&community_data=false&developer_data=false`

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const fetchCoinInfo = async () => {
    const { data } = await axios.get(singleCoinUrl(id))

    setCoin(data)
    console.log(data)
  }

  useEffect(() => {
    fetchCoinInfo()
  }, [id])

  const increase = coin?.market_data.price_change_percentage_24h > 0

  return (
    <CoinInfoContainer>
      <TopSummaryBox>
        <NameSection>
          <CoinNameWrapper>
            <CoinIcon
              component='img'
              src={coin?.image.small}
              alt={`${coin?.name} icon`}
            />
            <CoinName component='h3'>{coin?.name}</CoinName>
          </CoinNameWrapper>
          <CoinSymbol>{coin?.symbol.toUpperCase()}</CoinSymbol>
          <FavoriteBorderOutlinedIcon
            sx={{
              fontSize: 18,
              '&:hover': {
                color: '#F5BB96',
                cursor: 'pointer',
              },
            }}
          />
          <CoinRank>Rank #{coin?.coingecko_rank}</CoinRank>
        </NameSection>
        <PriceSection>
          <Typography
            component='h2'
            sx={{ fontSize: '12px', fontWeight: '600' }}
          >
            {coin?.name} Price
            <span
              style={{
                color: 'rgb(145 148 153)',
                fontWeight: '500',
                paddingLeft: '3px',
              }}
            >
              ({coin?.symbol.toUpperCase()})
            </span>
          </Typography>
          <CoinPrice component='span'>
            ${numberWithCommas(coin?.market_data.current_price.usd.toFixed(2))}
          </CoinPrice>
          <span
            style={{
              padding: '5px 10px',
              backgroundColor: increase
                ? 'rgb(22, 199, 132)'
                : 'rgb(234, 57, 67)',
              borderRadius: '8px',
              color: '#rgb(255, 255, 255)',
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '14px',
            }}
          >
            {increase ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            {increase
              ? coin?.market_data.price_change_percentage_24h.toFixed(2)
              : coin?.market_data.price_change_percentage_24h
                  .toFixed(2)
                  .slice(1)}
            %
          </span>
        </PriceSection>
      </TopSummaryBox>
    </CoinInfoContainer>
  )
}

export default CoinInfo
