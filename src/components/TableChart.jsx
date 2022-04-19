import axios from 'axios'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

const TableChart = ({ id }) => {
  const [priceData, setPriceData] = useState()

  const fetchPriceData = async () => {
    const historicalDataUrl = (id) =>
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`

    const { data } = await axios(historicalDataUrl(id))

    console.log(data.prices)
    setPriceData(data.prices)
  }

  useEffect(() => {
    fetchPriceData()
  })

  return (
    <>
      <h1>Chart</h1>
    </>
  )
}

export default TableChart
