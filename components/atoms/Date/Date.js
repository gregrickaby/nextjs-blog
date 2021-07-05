import cn from 'classnames'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import styles from './Date.module.css'

/**
 * Render the Date component.
 *
 * @author Greg Rickaby
 * @param {object} props The component attributes as props.
 * @return {Element}     The Date component.
 */
export default function Date(props) {
  if (!props?.date) {
    return false
  }
  return (
    <>
      <span className="material-icons align-text-bottom mr-1">date_range</span>
      <time
        className={cn(styles.date, 'font-roboto dark:text-gray-100')}
        dateTime={dayjs(props?.date).toISOString()}
      >
        {dayjs(props?.date).format('MMM DD, YYYY')}
      </time>
      {props?.category && (
        <span className={cn(styles.category, 'font-roboto dark:text-gray-100')}>
          {' '}
          |{' '}
          <span className="material-icons align-text-bottom mr-1">
            bookmark
          </span>
          {props?.category}
        </span>
      )}
    </>
  )
}

Date.propTypes = {
  category: PropTypes.any,
  date: PropTypes.string
}
