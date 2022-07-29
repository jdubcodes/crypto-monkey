import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    <>
      <h1>{coin.name}</h1>
      <img src={coin.image.small} alt={coin.name} />
    </>
  )
}

export default CoinInfo
