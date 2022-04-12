import CoinItem from './CoinItem'

function Coins({ coins }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24hr</th>
            <th>Volume</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            // let profit = coins.price_change_percentage_24 > 0
            return <CoinItem coins={coin} key={coin.id} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Coins
