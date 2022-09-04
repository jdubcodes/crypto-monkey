import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// MUI Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
// import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined'
// Custom Styled Components
import {
  CoinInfoContainer,
  TopSummaryBox,
  NameSection,
  CoinNameWrapper,
  CoinName,
  CoinSymbol,
  CoinRank,
  LinksSection,
} from '../styles/StyledComponents'

const CoinInfo = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState([])

  const singleCoinUrl = (id) =>
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&community_data=false&developer_data=false`

  useEffect(() => {
    const fetchCoinInfo = async () => {
      const { data } = await axios(singleCoinUrl(id))

      setCoin(data)
      console.log(data)
    }

    fetchCoinInfo()
  }, [id])

  return (
    <CoinInfoContainer>
      <TopSummaryBox>
        <NameSection>
          <CoinNameWrapper>
            <img
              src={coin.image?.small}
              alt={`${coin.name} icon`}
              style={{ height: '32px', width: '32px', borderRadius: '50%' }}
            />
            <CoinName component='h3'>{coin.name}</CoinName>
          </CoinNameWrapper>
          <CoinSymbol>{coin.symbol?.toUpperCase()}</CoinSymbol>
          <FavoriteBorderOutlinedIcon
            sx={{
              fontSize: 18,
              '&:hover': {
                color: '#F5BB96',
                cursor: 'pointer',
              },
            }}
          />
          <CoinRank>Rank #{coin.coingecko_rank}</CoinRank>
        </NameSection>
        <LinksSection>
          <ul>
            <li>
              <a href={coin.links?.homepage[0]}>Homepage</a>
            </li>
          </ul>
        </LinksSection>
      </TopSummaryBox>
    </CoinInfoContainer>
  )
}

export default CoinInfo
