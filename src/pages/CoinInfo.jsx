import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// MUI Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
// MUI Components
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
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
  PriceHeading,
  PriceTitle,
  PriceValue,
  PriceMovement,
  StatsSection,
  StatsContainer,
  StatsBlock,
  StatsBlockInner,
  StatsInnerLabel,
  StatsInnerValue,
  StatsPriceChange,
  ChartSection,
  ChartWrapper,
} from '../styles/StyledComponents'

const CoinInfo = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState()

  const singleCoinUrl = (id) =>
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&community_data=false&developer_data=false`

  useEffect(() => {
    const fetchCoinInfo = async () => {
      const { data } = await axios.get(singleCoinUrl(id))

      setCoin(data)
      console.log(data)
    }

    fetchCoinInfo()
  }, [id])

  const increase = coin?.market_data.price_change_percentage_24h > 0

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const formatNum = (x) => {
    let val = Math.round(Number(x) * 100) / 100
    let parts = val.toString().split('.')
    let num =
      parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
      (parts[1] ? '.' + parts[1] : '')

    return num
  }

  if (!coin)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )

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
          <PriceHeading component='h2'>
            {coin?.name} Price ({coin?.symbol.toUpperCase()})
          </PriceHeading>
          <PriceTitle>
            <PriceValue>
              $
              {numberWithCommas(coin?.market_data.current_price.usd.toFixed(2))}
            </PriceValue>
            <PriceMovement
              variant='span'
              sx={{
                backgroundColor: increase
                  ? 'rgb(22, 199, 132)'
                  : 'rgb(234, 57, 67)',
              }}
            >
              {increase ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              <Box sx={{ marginLeft: '-3px' }}>
                {increase
                  ? coin?.market_data.price_change_percentage_24h.toFixed(2)
                  : coin?.market_data.price_change_percentage_24h
                      .toFixed(2)
                      .slice(1)}
                %
              </Box>
            </PriceMovement>
          </PriceTitle>
        </PriceSection>
      </TopSummaryBox>
      <StatsSection>
        <StatsContainer>
          <StatsBlock
            sx={{
              borderRight: '1px solid rgb(223, 215, 215)',
              marginRight: '28px',
            }}
          >
            <StatsBlockInner>
              <StatsInnerLabel>Market Cap</StatsInnerLabel>
              <StatsInnerValue>
                ${numberWithCommas(coin?.market_data.market_cap.usd)}
              </StatsInnerValue>
              <StatsPriceChange
                sx={{
                  color: increase ? 'rgb(22, 199, 132)' : 'rgb(234, 57, 67)',
                  display: 'flex',
                }}
              >
                {increase ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                <Box sx={{ marginLeft: '-3px' }}>
                  {increase
                    ? coin?.market_data.market_cap_change_percentage_24h.toFixed(
                        2
                      )
                    : coin?.market_data.market_cap_change_percentage_24h
                        .toFixed(2)
                        .slice(1)}
                  %
                </Box>
              </StatsPriceChange>
            </StatsBlockInner>
          </StatsBlock>
          <StatsBlock
            sx={{
              borderRight: '1px solid rgb(223, 215, 215)',
              marginRight: '28px',
            }}
          >
            <StatsBlockInner>
              <StatsInnerLabel>Market Cap Change (24h)</StatsInnerLabel>
              <StatsInnerValue>
                $
                {formatNum(
                  coin?.market_data.market_cap_change_24h_in_currency.usd
                )}
              </StatsInnerValue>
              <StatsPriceChange
                sx={{
                  color: increase ? 'rgb(22, 199, 132)' : 'rgb(234, 57, 67)',
                  display: 'flex',
                }}
              >
                {increase ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                <Box sx={{ marginLeft: '-3px' }}>
                  {increase
                    ? coin?.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(
                        2
                      )
                    : coin?.market_data.market_cap_change_percentage_24h_in_currency.usd
                        .toFixed(2)
                        .slice(1)}
                  %
                </Box>
              </StatsPriceChange>
            </StatsBlockInner>
          </StatsBlock>
          <StatsBlock
            sx={{
              borderRight: '1px solid rgb(223, 215, 215)',
              marginRight: '28px',
            }}
          >
            <StatsBlockInner>
              <StatsInnerLabel>Total Volume</StatsInnerLabel>
              <StatsInnerValue>
                ${numberWithCommas(coin?.market_data.total_volume.usd)}
              </StatsInnerValue>
            </StatsBlockInner>
            <StatsBlockInner sx={{ marginTop: '28px' }}>
              <StatsInnerLabel>Volume / Market Cap</StatsInnerLabel>
              <StatsInnerValue>
                {(
                  coin?.market_data.total_volume.usd /
                  coin?.market_data.market_cap.usd
                ).toFixed(4)}
              </StatsInnerValue>
            </StatsBlockInner>
          </StatsBlock>
          <StatsBlock sx={{ paddingRight: '24px' }}>
            <StatsBlockInner>
              <StatsInnerLabel>Circulating Supply</StatsInnerLabel>
              <StatsInnerValue>
                {formatNum(coin?.market_data.circulating_supply) +
                  ' ' +
                  coin?.symbol.toUpperCase()}
              </StatsInnerValue>
            </StatsBlockInner>
            <StatsBlockInner sx={{ marginTop: '28px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <StatsInnerLabel>Max Supply</StatsInnerLabel>
                <StatsInnerValue>
                  {!coin?.market_data.max_supply
                    ? '--'
                    : numberWithCommas(coin?.market_data.max_supply)}
                </StatsInnerValue>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <StatsInnerLabel>Total Supply</StatsInnerLabel>
                <StatsInnerValue>
                  {formatNum(coin?.market_data.total_supply)}
                </StatsInnerValue>
              </Box>
            </StatsBlockInner>
          </StatsBlock>
        </StatsContainer>
      </StatsSection>
      <ChartSection>
        <ChartWrapper></ChartWrapper>
      </ChartSection>
    </CoinInfoContainer>
  )
}

export default CoinInfo
