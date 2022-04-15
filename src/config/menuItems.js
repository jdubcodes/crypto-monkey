import ArticleOutlined from '@mui/icons-material/ArticleOutlined'
import CurrencyBitcoin from '@mui/icons-material/CurrencyBitcoin'
import SwapHorizOutlined from '@mui/icons-material/SwapHorizOutlined'

const menuItems = [
  {
    text: 'Cryptocurrencies',
    icon: <CurrencyBitcoin />,
    path: '/',
  },
  {
    text: 'Crypto News',
    icon: <ArticleOutlined />,
    path: '/news',
  },
  {
    text: 'Monkey Swap',
    icon: <SwapHorizOutlined />,
    path: '/swap',
  },
]

export default menuItems
