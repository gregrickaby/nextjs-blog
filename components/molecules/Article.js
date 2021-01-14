import PostHeader from '@/components/molecules/PostHeader'
import PropTypes from 'prop-types'

/**
 * Render the Article component.
 *
 * @author Greg Rickaby
 * @param {object} props          The component attributes as props.
 * @param {any}    props.children Child component(s) to render.
 * @return {Element}              The Article component.
 */
export default function Article(props) {
  return (
    <article>
      <PostHeader {...props} />
      {props?.children}
    </article>
  )
}

Article.propTypes = {
  children: PropTypes.any.isRequired
}
