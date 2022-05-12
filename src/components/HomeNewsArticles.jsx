import axios from 'axios'
import { useState, useEffect } from 'react'
// MUI Components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// Custom styled compoenents
import {
  ArticleContainer,
  FiCard,
  FiCardActionArea,
  FiCardMedia,
  FiCardContent,
} from '../components/styles/StyledComponents'

const News = () => {
  const [articles, setArticles] = useState([])

  const newsEndPoint = async () => {
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {
        q: 'Crypto',
        count: '4',
        setLang: 'EN',
        mkt: 'en-US',
        freshness: 'Day',
        textFormat: 'Raw',
        safeSearch: 'Off',
      },
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.REACT_APP_NEWS_API_KEY}`,
      },
    }

    const { data } = await axios.request(options)

    console.log(data.value)
    setArticles(data.value)
  }
  useEffect(() => {
    newsEndPoint()
  }, [])

  return (
    <ArticleContainer>
      {articles.map((article, index) => {
        return (
          <FiCard key={index}>
            <FiCardActionArea href={article.url}>
              <FiCardMedia
                component='img'
                img={article.image.thumbnail.contentUrl}
                alt=''
              />
              <FiCardContent>
                <Typography variant='h5' color='secondary'>
                  {article.name}
                </Typography>
                <Typography variant='body2' color='secondary'>
                  {article.description}
                </Typography>
              </FiCardContent>
            </FiCardActionArea>
          </FiCard>
        )
      })}
    </ArticleContainer>
  )
}

export default News
