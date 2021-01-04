import PostHeader from '@/components/PostHeader'
import PropTypes from 'prop-types'

export default function Article(props) {
  console.log(props)
  return (
    <>
      <article>
        <PostHeader props={props} />
        {props.children}
      </article>
    </>
  )
}

Article.propTypes = {
  children: PropTypes.any.isRequired,
  frontMatter: PropTypes.object.isRequired
}
