import axios from 'axios'
import { useState, useEffect } from 'react'
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

const TableChart = ({ id }) => {
  const [sevenDayHistory, setSevenDayHistory] = useState([])
  const [profit, setProfit] = useState()

  useEffect(() => {
    const fetchPriceData = async () => {
      const historicalDataUrl = (id) =>
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`

      const { data } = await axios(historicalDataUrl(id))

      setSevenDayHistory(data.prices)
      // Handle graph color
      const firstPrice = data.prices[0][1]
      const lastPrice = data.prices[data.prices.length - 1][1]
      const checkProfit = () =>
        lastPrice > firstPrice ? setProfit(true) : setProfit(false)

      checkProfit()
    }
    fetchPriceData()
  }, [])

  return (
    <Box sx={{ width: 160, height: 60 }}>
      <Line
        data={{
          labels: sevenDayHistory.map((day) => {
            let date = new Date(day[0])
            return date.toLocaleDateString()
          }),

          datasets: [
            {
              data: sevenDayHistory.map((price) => price[1]),
              label: ``,
              borderColor: profit ? 'rgb(22, 199, 132)' : 'rgb(234, 57, 67)',
              borderWidth: 2,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
          plugins: {
            legend: {
              display: false,
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
