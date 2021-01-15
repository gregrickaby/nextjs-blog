import PropTypes from 'prop-types'
import dayjs from 'dayjs'

/**
 * Render the Date component.
 *
 * @author Greg Rickaby
 * @param {object} props      The component attributes as props.
 * @param {string} props.date The post date.
 * @return {Element}          The Date component.
 */
export default function Date(props) {
  return (
    <time
      className="font-roboto text-lg text-gray-500 dark:text-gray-100"
      dateTime={dayjs(props?.date).toISOString()}
    >
      {dayjs(props?.date).format('MMM DD, YYYY')}
    </time>
  )
}

Date.propTypes = {
  date: PropTypes.string.isRequired
}
