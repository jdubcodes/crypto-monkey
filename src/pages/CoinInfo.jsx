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
  StatsInnerBox,
  StatsPriceChange,
  ChartSection,
  ChartWrapper,
  SectionHeading,
  ChartButtonWrapper,
  ChartButtonList,
  ChartHeadingWrapper,
  ChartButton,
} from '../styles/StyledComponents'
// Custom components
import MainChart from '../components/MainChart'
// Config files
import chartDays from '../config/chartDays'

const CoinInfo = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState()
  const [days, setDays] = useState(1)

  const singleCoinUrl = (id) =>
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&community_data=false&developer_data=false`

  useEffect(() => {
    const fetchCoinInfo = async () => {
      const { data } = await axios.get(singleCoinUrl(id))

      setCoin(data)
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
          <StatsBlock>
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
          <StatsBlock>
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
          <StatsBlock>
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
          <StatsBlock
            sx={{
              paddingRight: '24px',
              marginRight: 'none',
              borderRight: 'none',
            }}
          >
            <StatsBlockInner>
              <StatsInnerLabel>
                Circulating Supply ({coin?.symbol.toUpperCase()})
              </StatsInnerLabel>
              <StatsInnerValue>
                {formatNum(coin?.market_data.circulating_supply)}
              </StatsInnerValue>
            </StatsBlockInner>
            <StatsBlockInner sx={{ marginTop: '28px' }}>
              <StatsInnerBox>
                <StatsInnerLabel>Max Supply</StatsInnerLabel>
                <StatsInnerValue>
                  {!coin?.market_data.max_supply
                    ? '--'
                    : formatNum(coin?.market_data.max_supply)}
                </StatsInnerValue>
              </StatsInnerBox>
              <StatsInnerBox>
                <StatsInnerLabel>Total Supply</StatsInnerLabel>
                <StatsInnerValue>
                  {formatNum(coin?.market_data.total_supply)}
                </StatsInnerValue>
              </StatsInnerBox>
            </StatsBlockInner>
          </StatsBlock>
        </StatsContainer>
      </StatsSection>
      <ChartSection>
        <ChartHeadingWrapper>
          <SectionHeading>{coin?.name} to USD Chart</SectionHeading>
          <ChartButtonWrapper>
            <ChartButtonList>
              {chartDays.map((day) => (
                <ChartButton
                  key={day.value}
                  onClick={() => {
                    setDays(day.value)
                  }}
                  component='li'
                  sx={{
                    backgroundColor: day.value === days ? '#fffefd' : '',
                    boxShadow:
                      day.value === days
                        ? 'rgba(0, 0, 0, 0.04) 0px 3px 5px'
                        : '',
                  }}
                >
                  <Typography variant='body2' sx={{ fontSize: '15px' }}>
                    {day.label}
                  </Typography>
                </ChartButton>
              ))}
            </ChartButtonList>
          </ChartButtonWrapper>
        </ChartHeadingWrapper>
        <ChartWrapper>
          <MainChart id={id} days={days} />
        </ChartWrapper>
      </ChartSection>
    </CoinInfoContainer>
  )
}

export default CoinInfo
