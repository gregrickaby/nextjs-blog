import PropTypes from 'prop-types'

export default function PostHeader(props) {
  return (
    <header className="text-center pb-4">
      <h1 className="mb-3" dangerouslySetInnerHTML={{__html: props?.title}} />
      {props?.excerpt && (
        <p
          className="text-gray-500"
          dangerouslySetInnerHTML={{__html: props?.excerpt}}
        />
      )}
      <hr />
    </header>
  )
}

PostHeader.propTypes = {
  excerpt: PropTypes.string,
  title: PropTypes.string.isRequired
}
