import PropTypes from 'prop-types'
import styles from './Title.module.css'

/**
 * Render the Title component.
 *
 * @author Greg Rickaby
 * @param {object} props       The component attributes as props.
 * @param {string} props.title Any text to display in the title.
 * @return {Element}           The Title component.
 */
export default function Title(props) {
  return (
    <h1
      className={styles.title}
      dangerouslySetInnerHTML={{__html: props?.title}}
    />
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}
