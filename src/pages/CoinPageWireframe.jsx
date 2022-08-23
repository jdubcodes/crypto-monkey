const CoinPageWireframe = () => {
  return (
    <div className='container'>
      <div className='all-coin-info'>
        <div className='main-coin-info'>
          <div className='coin-img'></div>
          <div className='coin-name'>
            <div className='coin-full-name'></div>
            <div className='coin-symbol'></div>
          </div>
          <div className='watchlist-icon'></div>
        </div>
        <div className='coin-price-info'>
          <div className='coin-name coin-symbol'></div>
          <div className='coin-price seven-days-profit'></div>
          <div classname='low-to-high'></div>
        </div>
        <div className='links'>
          <div className='github-link'></div>
          <div className='homepage'></div>
          <div className='reddit-link'></div>
        </div>
        <div className='coin-stats'>
          <div className='market-cap'></div>
          <div className='fully-diluted-market-cap'></div>
          <div className='volume'></div>
          <div className='circulating-supply'></div>
        </div>
      </div>
      <div className='coin-chart'>{/* coin chart componenet */}</div>
    </div>
  )
}

export default CoinPageWireframe

// CoinInfo page
{
  /* <Box
sx={{
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
}}
>
<Box
  component='img'
  src={coin.image.small}
  alt={coin.id}
  sx={{ width: '32px', height: '32px' }}
/>
<Typography variant='h4' sx={{ fontSize: '32px', fontWeight: '600' }}>
  {coin.name}
</Typography>
<Typography
  className='symbol'
  variant='body2'
  sx={{
    padding: '2px 5px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: '#ffddc7',
    borderRadius: '4px',
  }}
>
  {coin.symbol.toUpperCase()}
</Typography>
<Typography
  variant='body1'
  sx={{
    fontSize: '11px',
    fontWeight: '500',
    padding: '2px 5px',
    backgroundColor: '#393536',
    borderRadius: '4px',
    color: '#FEF1EA',
  }}
>
  Rank #{coin.market_cap_rank}
</Typography>
<div
  className='watchlist-button'
  style={{
    padding: '6px 6px 1px',
    border: '1px solid #cfb0a1',
    borderRadius: '8px',
  }}
>
  <FavoriteBorderOutlinedIcon
    className='watchlist'
    sx={{
      fontSize: 16,
      '&:hover': {
        color: '#F5BB96',
        cursor: 'pointer',
      },
    }}
  />
</div>
</Box>
<List sx={{ display: 'inline-flex' }}>
<ListItem disablePadding disableGutters>
  <ListItemButton component='a' href={coin.links.homepage[0]}>
    <LaunchOutlinedIcon sx={{ fontSize: 16 }} />
    <ListItemText primary='Homepage' />
  </ListItemButton>
</ListItem>
<ListItem disablePadding>
  <ListItemButton component='a' href={coin.links.repos_url.github[0]}>
    <LaunchOutlinedIcon sx={{ fontSize: 16 }} />
    <ListItemText primary='Source Code' />
  </ListItemButton>
</ListItem>
<ListItem disablePadding>
  <ListItemButton component='a' href={coin.links.subreddit_url}>
    <LaunchOutlinedIcon sx={{ fontSize: 16 }} />
    <ListItemText primary='Reddit' />
  </ListItemButton>
</ListItem>
</List>
</Box>
<Box sx={{ display: 'inline-flex', gap: '20px' }}>
<div className='market-cap'>{coin.market_data.market_cap.usd}</div>
<div className='fully-diluted-valuation'>
{coin.market_data.fully_diluted_valuation.usd}
</div>
<div className='volume'>{coin.market_data.total_volume.usd}</div>
<div className='circulating-supply'>
{coin.market_data.circulating_supply}
  </div> */
}
