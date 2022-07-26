// Custom styled compoenents
import {
  FiCard,
  FiCardActionArea,
  FiCardMedia,
  NewsHeadlineBox,
  FiCardContent,
  ArticleTitle,
} from './styles/StyledComponents'
// Config Files
import newsImgs from '../config/newsImgs'

const NewsCard = ({ index, article, articleUrl }) => {
  const randomImg = Math.floor(Math.random() * newsImgs.length)

  return (
    <FiCard key={index}>
      <FiCardActionArea href={articleUrl} target='_blank'>
        <FiCardMedia media='img' image={newsImgs[randomImg]} alt='News image'>
          <NewsHeadlineBox role='tooltip'>
            <FiCardContent>
              <ArticleTitle component='h2'>{article}</ArticleTitle>
            </FiCardContent>
          </NewsHeadlineBox>
        </FiCardMedia>
      </FiCardActionArea>
    </FiCard>
  )
}

export default NewsCard
