import axios from 'axios'
import { useState, useEffect } from 'react'
// Custom Components
import NewsCard from './NewsCard'
// Custom Styled Componenets
import { ArticlesContainer, SectionHeading } from './styles/StyledComponents'
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import { A11y } from 'swiper'
// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const NewsArticles = () => {
  const [articles, setArticles] = useState([])

  const newsEndPoint = async () => {
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {
        q: 'Crypto',
        count: '10',
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

    setArticles(data.value)
  }
  useEffect(() => {
    newsEndPoint()
  }, [])

  return (
    <ArticlesContainer>
      <SectionHeading
        variant='h5'
        component='h2'
        sx={{ marginBottom: '5px', paddingTop: '10px' }}
      >
        Daily Cryptocurrency News
      </SectionHeading>
      <Swiper
        modules={[A11y]}
        spaceBetween={5}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {articles.map((article, index) => {
          return (
            <SwiperSlide>
              <NewsCard
                key={index}
                article={article.name}
                articleUrl={article.url}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </ArticlesContainer>
  )
}

export default NewsArticles
