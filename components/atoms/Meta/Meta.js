import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import styles from './Meta.module.css'

/**
 * Render the Meta component.
 *
 * @author Greg Rickaby
 * @param {object} props The component attributes as props.
 * @return {Element}     The Meta component.
 */
export default function Meta(props) {
  if (!props?.date) {
    return false
  }
  return (
    <div className={styles.meta}>
      <time dateTime={dayjs(props?.date).toISOString()}>
        {dayjs(props?.date).format('MMM DD, YYYY')}
      </time>{' '}
      {props?.readingTime && <>&middot; {props?.readingTime} </>}{' '}
      {props?.category && <> &middot; #{props?.category}</>}
    </div>
  )
}

Meta.propTypes = {
  category: PropTypes.any,
  date: PropTypes.string
}
