import cn from 'classnames'
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
    <div className={cn(styles.meta, 'dark:text-gray-700')}>
      <time dateTime={dayjs(props?.date).toISOString()}>
        {dayjs(props?.date).format('MMM DD, YYYY')}
      </time>
      {props?.category && <> | {props?.category}</>}
    </div>
  )
}

Meta.propTypes = {
  category: PropTypes.any,
  date: PropTypes.string
}
