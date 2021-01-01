import PropTypes from 'prop-types'

export default function ArchiveHeader(props) {
  return (
    <div className="pb-4">
      <h1>{props?.title}</h1>
      <p>{props?.description}</p>
    </div>
  )
}

ArchiveHeader.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}
