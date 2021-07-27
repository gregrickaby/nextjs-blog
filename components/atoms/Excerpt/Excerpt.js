import PropTypes from 'prop-types'
import styles from './excerpt.module.css'

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
      className={styles.excerpt}
      dangerouslySetInnerHTML={{__html: props?.excerpt}}
    />
  )
}

Excerpt.propTypes = {
  excerpt: PropTypes.string
}
