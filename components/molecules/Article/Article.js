import PageHeader from '@/components/molecules/PageHeader/PageHeader'
import PropTypes from 'prop-types'
import AuthorCard from '../AuthorCard/AuthorCard'

/**
 * Render the Article component.
 *
 * @author Greg Rickaby
 * @param {object} props The component attributes as props.
 * @return {Element}     The Article component.
 */
export default function Article(props) {
  return (
    <article>
      <PageHeader {...props} />
      {props?.children}
      <AuthorCard />
    </article>
  )
}

Article.propTypes = {
  children: PropTypes.any.isRequired
}
