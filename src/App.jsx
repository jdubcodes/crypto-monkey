import { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar'
import Coins from './components/Coins'
import News from './components/News'

import './components/styles/App.css'

function App() {
  const [coins, setCoins] = useState([])
  const [news, setNews] = useState([])

  useEffect(() => {
    const coinsUrl =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

    axios
      .get(coinsUrl)
      .then((res) => {
        setCoins(res.data)
      })
      .catch((error) => {
        console.error(error)
      })

    const newsOptions = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency',
      params: {
        textFormat: 'Raw',
        safeSearch: 'Off',
        freshness: 'Day',
        count: '10',
      },
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': 'ed870edee7mshcf838236de857aep12b1aajsn42f7a7a30518',
      },
    }

    axios
      .request(newsOptions)
      .then((res) => {
        console.log(res.data.value)
        setNews(res.data.value)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <Coins coins={coins} />
      <News news={news} />
    </div>
  )
}

export default App
