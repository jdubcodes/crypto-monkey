import axios from 'axios'
import { useState, useEffect } from 'react'
// Chart imports
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'

// MUI Components
import Box from '@mui/material/Box'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)

const TableChart = ({ id, days }) => {
  const [priceHistory, setPriceHistory] = useState([])
  const [profit, setProfit] = useState()

  useEffect(() => {
    const fetchPriceData = async () => {
      const historicalDataUrl = (id) =>
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`

      const { data } = await axios(historicalDataUrl(id))

      setPriceHistory(data.prices)
      // Handle graph color
      const firstPrice = data.prices[0][1]
      const lastPrice = data.prices[data.prices.length - 1][1]
      const checkProfit = () =>
        lastPrice > firstPrice ? setProfit(true) : setProfit(false)

      checkProfit()
    }
    fetchPriceData()
  }, [id, days])

  return (
    <Box sx={{ height: '100%' }}>
      <Line
        data={{
          labels: priceHistory.map((day) => {
            let date = new Date(day[0])
            return date.toLocaleDateString()
          }),

          datasets: [
            {
              label: ``,
              data: priceHistory.map((price) => price[1]),
              borderColor: profit ? 'rgb(22, 199, 132)' : 'rgb(234, 57, 67)',
              borderWidth: 2,
              backgroundColor: 'red',
              fill: true,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              display: true,
              grid: { color: '#fef1ea', borderColor: 'rgb(255,221,199)' },
            },
            y: {
              display: true,
              grid: { color: '#fef1ea', borderColor: 'rgb(255,221,199)' },
            },
          },
          plugins: {
            legend: {
              display: true,
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    </Box>
  )
}

export default TableChart
