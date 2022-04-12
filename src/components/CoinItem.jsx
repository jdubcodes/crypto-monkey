function CoinItem(props) {
  let profit = props.coins.price_change_percentage_24h > 0
  let cryptoId = props.coins.id

  return (
    <tr>
      <td>
        <img src={props.coins.image} alt={`${props.coins.id} icon`} />
        <div>
          <p>{props.coins.symbol.toUpperCase()}</p>
          <p>{cryptoId.charAt(0).toUpperCase() + cryptoId.slice(1)}</p>
        </div>
      </td>
      <td>${props.coins.current_price.toLocaleString()}</td>
      <td style={{ color: profit ? '#51d472' : '#e62727' }}>
        {props.coins.price_change_percentage_24h.toFixed(3)}%
      </td>
      <td>${props.coins.total_volume.toLocaleString()}</td>
      <td>${props.coins.market_cap.toLocaleString()}</td>
    </tr>
  )
}

export default CoinItem
