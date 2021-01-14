import PropTypes from 'prop-types'

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
      className="title wide text-gradient"
      dangerouslySetInnerHTML={{__html: props?.title}}
    />
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}
