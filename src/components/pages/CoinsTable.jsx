import { useState, useEffect } from 'react'
import axios from 'axios'
// MUI Compoenents
import Container from '@mui/material/Container'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TablePagination from '@mui/material/TablePagination'
import Typography from '@mui/material/Typography'
// MUI Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
// Custom styled components
import { CoinLogo, CoinNameBox, ProfitText } from '../styles/StyledComponents'

const CoinsTable = () => {
  const [coins, setCoins] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const fetchCoins = async () => {
    const { data } = await axios(`${process.env.REACT_APP_ALL_COINS_URL}`)

    console.log(data)
    setCoins(data)
  }

  useEffect(() => {
    fetchCoins()
  }, [])

  const handleChangePage = (newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Container sx={{ pt: 2 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align='center'
                sx={{ width: '16px', padding: '6px 8px' }}
              ></TableCell>
              <TableCell align='center'>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>24h %</TableCell>
              <TableCell>Market Cap</TableCell>
              <TableCell>Volume</TableCell>
              <TableCell>Last 7 Days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((coin) => {
                let increase = coin.price_change_percentage_24h > 0

                return (
                  <TableRow key={coin.symbol}>
                    <TableCell
                      align='right'
                      sx={{ paddingX: 0, lineHeight: 0 }}
                    >
                      <FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} />
                    </TableCell>
                    <TableCell align='center'>{coin.market_cap_rank}</TableCell>
                    <TableCell>
                      <CoinNameBox>
                        <CoinLogo
                          component='img'
                          src={coin.image}
                          alt={coin.symbol}
                        />
                        <Typography sx={{ fontWeight: 600 }}>
                          {coin.name}
                        </Typography>
                        <Typography sx={{ color: '#ADADAD', fontWeight: 500 }}>
                          {coin.symbol.toUpperCase()}
                        </Typography>
                      </CoinNameBox>
                    </TableCell>
                    <TableCell>
                      $
                      {numberWithCommas(
                        coin.current_price > 0.99
                          ? coin.current_price.toFixed(2)
                          : coin.current_price.toFixed(3)
                      )}
                    </TableCell>
                    <TableCell>
                      <ProfitText
                        sx={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: increase
                            ? 'rgb(22, 199, 132)'
                            : 'rgb(234, 57, 67)',
                        }}
                      >
                        {increase ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        {increase
                          ? coin.price_change_percentage_24h.toFixed(2)
                          : coin.price_change_percentage_24h
                              .toFixed(2)
                              .slice(1)}
                        %
                      </ProfitText>
                    </TableCell>
                    <TableCell>
                      ${numberWithCommas(coin.market_cap.toString())}
                    </TableCell>
                    <TableCell>
                      ${numberWithCommas(coin.total_volume.toString())}
                    </TableCell>
                    <TableCell>Coin Graph</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={coins.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  )
}

export default CoinsTable
