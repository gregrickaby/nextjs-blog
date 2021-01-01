import PropTypes from 'prop-types'

export default function PostHeader(props) {
  return (
    <header className="pb-4">
      <h1>{props?.title}</h1>
      {props?.excerpt && <p>{props?.excerpt}</p>}
    </header>
  )
}

PostHeader.propTypes = {
  excerpt: PropTypes.string,
  title: PropTypes.string.isRequired
}
