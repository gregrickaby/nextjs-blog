import PropTypes from 'prop-types'
import Date from '@/components/atoms/Date'
import Title from '@/components/atoms/Title'
import Excerpt from '../atoms/Excerpt'

/**
 * Render the PageHeader component.
 *
 * @author Greg Rickaby
 * @param {object} props         The component attributes as props.
 * @param {string} props.date    The post or page date.
 * @param {string} props.excerpt The post or page excerpt.
 * @param {string} props.title   The post or page title.
 * @return {Element}             The PageHeader component.
 */
export default function PageHeader(props) {
  return (
    <header className="text-center space-y-4 md:space-y-12 mb-12">
      <Date date={props?.date} />
      <Title title={props?.title} />
      <Excerpt excerpt={props?.excerpt} />
      <hr />
    </header>
  )
}

PageHeader.propTypes = {
  date: PropTypes.string,
  excerpt: PropTypes.string,
  title: PropTypes.string.isRequired
}
