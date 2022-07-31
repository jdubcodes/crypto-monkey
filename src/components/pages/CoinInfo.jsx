import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// MUI Components
import Box from '@mui/material/Box'
// MUI Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
// Custom Styled Components
import { CoinInfoContainer } from '../styles/StyledComponents'

const CoinInfo = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState([])

  useEffect(() => {
    const fetchCoinInfo = async () => {
      const singleCoinUrl = (id) =>
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&community_data=false&developer_data=false`

      const { data } = await axios(singleCoinUrl(id))

      setCoin(data)
      console.log(data)
    }
    fetchCoinInfo()
  }, [id])
  return (
    <CoinInfoContainer>
      {/* Flex box, column, 2 children */}
      <Box>
        <Box sx={{ display: 'flex' }}>
          <img src={coin.image.thumb} alt={coin.id} className='coin-img' />
          <h3 className='coin-name'>{coin.name}</h3>
          <p className='symbol'>{coin.symbol.toUpperCase()}</p>
          <p className='rank'>Rank #{coin.market_cap_rank}</p>
          <FavoriteBorderOutlinedIcon
            className='watchlist'
            sx={{
              fontSize: 16,
              '&:hover': {
                color: '#F5BB96',
                cursor: 'pointer',
              },
            }}
          />
        </Box>
        <div className='links'>
          <a href={coin.links.homepage} />
        </div>
      </Box>
      {/* Flex box with 4 children */}
      <Box></Box>
    </CoinInfoContainer>
  )
}

export default CoinInfo
