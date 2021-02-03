import cn from 'classnames'
import PropTypes from 'prop-types'
import styles from './Excerpt.module.css'

/**
 * Render the Excerpt component.
 *
 * @author Greg Rickaby
 * @param {object} props The component attributes as props.
 * @return {Element}     The Excerpt component.
 */
export default function Excerpt(props) {
  if (!props?.excerpt) {
    return false
  }
  return (
    <p
      className={cn(styles.excerpt, 'font-roboto dark:text-gray-100')}
      dangerouslySetInnerHTML={{__html: props?.excerpt}}
    />
  )
}

Excerpt.propTypes = {
  excerpt: PropTypes.string
}
