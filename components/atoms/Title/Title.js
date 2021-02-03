import cn from 'classnames'
import PropTypes from 'prop-types'
import styles from './Title.module.css'

/**
 * Render the Title component.
 *
 * @author Greg Rickaby
 * @param {object} props The component attributes as props.
 * @return {Element}     The Title component.
 */
export default function Title(props) {
  if (!props?.title) {
    return false
  }
  return (
    <h1
      className={cn(styles.title, 'shimmer')}
      dangerouslySetInnerHTML={{__html: props?.title}}
    />
  )
}

Title.propTypes = {
  title: PropTypes.string
}
