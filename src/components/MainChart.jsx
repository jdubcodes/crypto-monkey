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
  Filler,
  Tooltip,
} from 'chart.js'

// MUI Components
import Box from '@mui/material/Box'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
)

const TableChart = ({ id, days }) => {
  const [priceHistory, setPriceHistory] = useState([])
  const [profit, setProfit] = useState()

  useEffect(() => {
    const fetchPriceData = async () => {
      const historicalDataUrl = (id) =>
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`

      const { data } = await axios(historicalDataUrl(id))

      setPriceHistory(data.prices)
      // Handle chart color
      const firstPrice = data.prices[0][1]
      const lastPrice = data.prices[data.prices.length - 1][1]
      const checkProfit = () =>
        lastPrice > firstPrice ? setProfit(true) : setProfit(false)

      checkProfit()
    }
    fetchPriceData()
  }, [id, days])

  // Handle chart gradient
  let width, height, gradient
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left
    const chartHeight = chartArea.bottom - chartArea.top
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth
      height = chartHeight
      gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
      gradient.addColorStop(
        0,
        profit ? 'rgba(22, 199, 132, 0.01 )' : 'rgba(234, 57, 67, 0.01)'
      )
      gradient.addColorStop(
        0.7,
        profit ? 'rgba(22, 199, 132, 0.4 )' : 'rgba(234, 57, 67, 0.4)'
      )
      gradient.addColorStop(
        1,
        profit ? 'rgba(22, 199, 132, 0.7 )' : 'rgba(234, 57, 67, 0.7)'
      )
    }

    return gradient
  }

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
              label: 'Price in USD',
              data: priceHistory.map((price) => price[1]),
              borderColor: profit ? 'rgb(22, 199, 132)' : 'rgb(234, 57, 67)',
              borderWidth: 2,
              fill: true,
              backgroundColor: function (context) {
                const chart = context.chart
                const { ctx, chartArea } = chart

                if (!chartArea) {
                  // This case happens on initial chart load
                  return
                }
                return getGradient(ctx, chartArea)
              },
              tension: 0.1,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              ticks: {
                // Handle custom tick display
                callback: function (value) {
                  if (value < 1) {
                    return value.toFixed(3)
                  }
                  if (value < 100) {
                    return value.toLocaleString('en-US')
                  }
                  if (value < 10000) {
                    return value.toLocaleString('en-US')
                  }
                  return (value / 1000).toFixed(2) + 'K'
                },
              },
              grid: {
                color: 'rgba(254,241,234, 0.3)',
                borderColor: 'rgba(255,221,199, 0.3)',
              },
            },
          },
          plugins: {
            legend: {
              display: true,
            },
            tooltip: {
              usePointStyle: true,
            },
          },
          elements: {
            point: {
              radius: 0,
              hoverRadius: 5,
            },
          },
        }}
      />
    </Box>
  )
}

export default TableChart
