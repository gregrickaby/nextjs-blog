import Excerpt from '@/components/atoms/Excerpt/Excerpt'
import Date from '@/components/atoms/Date/Date'
import Title from '@/components/atoms/Title/Title'
import PropTypes from 'prop-types'
import styles from './PageHeader.module.css'

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
    <header className={styles.pageHeader}>
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
