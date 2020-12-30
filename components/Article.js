import PropTypes from 'prop-types'

export default function Article({children}) {
  return <article className="space-y-4">{children}</article>
}

Article.propTypes = {
  children: PropTypes.any.isRequired
}
