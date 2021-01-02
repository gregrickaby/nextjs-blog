import PropTypes from 'prop-types'

export default function ArchiveHeader(props) {
  return (
    <div className="text-center pb-4">
      <h1 className="mb-3" dangerouslySetInnerHTML={{__html: props?.title}} />
      {props?.description && (
        <p
          className="text-gray-500"
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
