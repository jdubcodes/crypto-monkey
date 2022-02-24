import { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar'
import Coins from './components/Coins'

import GlobalStyles from './components/styles/GlobalStyles'

function App() {
  const [coins, setCoints] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoints(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Coins coins={coins} />
    </div>
  );
}

export default App;
