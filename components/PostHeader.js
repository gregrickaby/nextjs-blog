import PropTypes from 'prop-types'

export default function PostHeader(props) {
  return (
    <header className="pb-4">
      <h1 dangerouslySetInnerHTML={{__html: props?.title}} />
      {props?.excerpt && (
        <p dangerouslySetInnerHTML={{__html: props?.excerpt}} />
      )}
    </header>
  )
}

PostHeader.propTypes = {
  excerpt: PropTypes.string,
  title: PropTypes.string.isRequired
}
