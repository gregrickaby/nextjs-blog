import PostHeader from '@/components/PostHeader'
import PropTypes from 'prop-types'

export default function Article(props) {
  return (
    <>
      <article className="space-y-4">
        <PostHeader
          title={props?.frontMatter?.title}
          excerpt={props?.frontMatter?.excerpt}
        />
        {props.children}
      </article>
    </>
  )
}

Article.propTypes = {
  children: PropTypes.any.isRequired,
  frontMatter: PropTypes.object.isRequired
}