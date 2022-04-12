const defaultImg =
  'https://images.pexels.com/photos/11646613/pexels-photo-11646613.jpeg'

const News = ({ news }) => {
  return (
    <>
      <h1>Today's Top Crypto News</h1>
      <div>
        {news.map((article, index) => {
          return (
            <div key={index}>
              <a href={article.url}>
                <h4>{article.name}</h4>
              </a>
              <p>{article.description}</p>
              <img
                className='news-img'
                src={article?.image?.thumbnail?.contentUrl || defaultImg}
                alt=''
              />
              <p></p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default News
