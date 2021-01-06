import PostHeader from '@/components/PostHeader'
import PropTypes from 'prop-types'

export default function Article(props) {
  return (
    <article>
      <PostHeader {...props} />
      {props.children}
    </article>
  )
}

Article.propTypes = {
  children: PropTypes.any.isRequired
}
