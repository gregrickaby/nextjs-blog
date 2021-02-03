import Excerpt from '@/components/atoms/Excerpt/Excerpt'
import Date from '@/components/atoms/Date/Date'
import Title from '@/components/atoms/Title/Title'
import PropTypes from 'prop-types'
import styles from './PageHeader.module.css'

/**
 * Render the PageHeader component.
 *
 * @author Greg Rickaby
 * @param {object} props The component attributes as props.
 * @return {Element}     The PageHeader component.
 */
export default function PageHeader(props) {
  return (
    <header className={styles.pageHeader}>
      <Date date={props?.date} />
      <Title title={props?.title} />
      <Excerpt excerpt={props?.excerpt} />
      {props?.coverImage && (
        <img src={props?.coverImage} alt={props?.title} className="wide" />
      )}
      <hr />
    </header>
  )
}

PageHeader.propTypes = {
  coverImage: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  title: PropTypes.string.isRequired
}
