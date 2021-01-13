import PropTypes from 'prop-types'

/**
 * Render the ArchiveHeader component.
 *
 * @author Greg Rickaby
 * @param {object} props The component attributes as props.
 * @return {Element}     The ArchiveHeader component.
 */
export default function ArchiveHeader(props) {
  return (
    <div className="text-center space-y-8 mb-12">
      <h1
        className="title wide"
        dangerouslySetInnerHTML={{__html: props?.title}}
      />
      {props?.description && (
        <p
          className="font-roboto text-gray-500 dark:text-gray-100"
          dangerouslySetInnerHTML={{__html: props?.description}}
        />
      )}
      <hr />
    </div>
  )
}

ArchiveHeader.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}
