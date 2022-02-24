import CoinItem from './CoinItem'
import { Container, StyledTable, TableHeading } from './styles/Coins.styled'

function Coins(props) {
  return (
    <Container>
      <StyledTable>
          <TableHeading>
              <th>Coin</th>
              <th>Price</th>
              <th>24hr</th>
              <th>Volume</th>
              <th>Mkt Cap</th>
          </TableHeading>
          <tbody>
          {props.coins.map(coins => {
              let profit = coins.price_change_percentage_24 > 0;

              return(
                  <CoinItem coins={coins} key={coins.id} />
              )
          })}
          </tbody>
      </StyledTable>
    </Container>
  )
}

export default Coins