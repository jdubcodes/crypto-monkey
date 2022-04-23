import { useState, useEffect } from 'react'
import axios from 'axios'
// Created componenets
import TableChart from '../TableChart'
// MUI Compoenents
import Container from '@mui/material/Container'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
// MUI Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
// Custom styled components
import { CoinLogo, CoinNameBox, ProfitText } from '../styles/StyledComponents'

const CoinsTable = () => {
  const [coins, setCoins] = useState([])
  const [page, setPage] = useState(0)

  const fetchCoins = async () => {
    const { data } = await axios(`${process.env.REACT_APP_ALL_COINS_URL}`)

    console.log(data)
    setCoins(data)
  }

  useEffect(() => {
    fetchCoins()
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1)
    window.scroll(0, 100)
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Container sx={{ pt: 1 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align='center'
                sx={{ width: '16px', padding: '6px 8px' }}
              />
              <TableCell
                align='center'
                sx={{ display: { xs: 'none', sm: 'table-cell' } }}
              >
                #
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align='center'>24h %</TableCell>
              <TableCell
                align='center'
                sx={{ display: { xs: 'none', md: 'table-cell' } }}
              >
                Market Cap
              </TableCell>
              <TableCell
                align='center'
                sx={{ display: { xs: 'none', md: 'table-cell' } }}
              >
                Volume
              </TableCell>
              <TableCell
                align='center'
                sx={{ display: { xs: 'none', sm: 'table-cell' } }}
              >
                Last 7 Days
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.slice(page * 10, page * 10 + 10).map((coin) => {
              let increase = coin.price_change_percentage_24h > 0

              return (
                <TableRow
                  key={coin.symbol}
                  sx={{
                    'MuiTableCell-root': {
                      paddingY: 0,
                    },
                  }}
                >
                  <TableCell align='right' sx={{ paddingX: 0, lineHeight: 0 }}>
                    <FavoriteBorderOutlinedIcon
                      sx={{
                        fontSize: 16,
                        '&:hover': {
                          color: '#F5BB96',
                          cursor: 'pointer',
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{ display: { xs: 'none', sm: 'table-cell' } }}
                  >
                    {coin.market_cap_rank}
                  </TableCell>
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
                      <Typography
                        sx={{
                          color: '#ADADAD',
                          fontWeight: 500,
                          // display: { xs: 'none' },
                        }}
                      >
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
                        : coin.price_change_percentage_24h.toFixed(2).slice(1)}
                      %
                    </ProfitText>
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                    ${numberWithCommas(coin.market_cap.toString())}
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                    ${numberWithCommas(coin.total_volume.toString())}
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      paddingY: 0,
                      display: { xs: 'none', sm: 'table-cell' },
                    }}
                  >
                    <TableChart id={coin.id} />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        sx={{
          '.Mui-selected': {
            '&:hover': {
              backgroundColor: '#fef1ea',
            },
            backgroundColor: '#fef1ea',
          },
        }}
        count={25}
        onChange={handleChangePage}
        color='primary'
      />
    </Container>
  )
}

export default CoinsTable
