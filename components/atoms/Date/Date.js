import cn from 'classnames'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import styles from './Date.module.css'

/**
 * Render the Date component.
 *
 * @author Greg Rickaby
 * @param {object} props      The component attributes as props.
 * @param {string} props.date The post date.
 * @return {Element}          The Date component.
 */
export default function Date(props) {
  if (!props?.date) {
    return false
  }
  return (
    <time
      className={cn(styles.date, 'font-roboto dark:text-gray-100')}
      dateTime={dayjs(props?.date).toISOString()}
    >
      {dayjs(props?.date).format('MMM DD, YYYY')}
    </time>
  )
}

Date.propTypes = {
  date: PropTypes.string
}
