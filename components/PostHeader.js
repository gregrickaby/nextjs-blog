import PropTypes from 'prop-types'
import dayjs from 'dayjs'

/**
 * Render the PostHeader component.
 *
 * @author Greg Rickaby
 * @param {object} props         The component attributes as props.
 * @param {string} props.date    The post date.
 * @param {string} props.excerpt The post excerpt.
 * @param {string} props.title   The post title.
 * @return {Element}              The PostHeader component.
 */
export default function PostHeader(props) {
  return (
    <header className="text-center space-y-8 mb-12">
      <time
        className="font-sans text-gray-500 dark:text-gray-100"
        dateTime={dayjs(props?.date).toISOString()}
      >
        {dayjs(props?.date).format('MMM DD, YYYY')}
      </time>
      <h1
        className="title wide"
        dangerouslySetInnerHTML={{__html: props?.title}}
      />
      {props?.excerpt && (
        <p
          className="font-sans text-gray-500 dark:text-gray-100"
          dangerouslySetInnerHTML={{__html: props?.excerpt}}
        />
      )}
      <hr />
    </header>
  )
}

PostHeader.propTypes = {
  date: PropTypes.string,
  excerpt: PropTypes.string,
  title: PropTypes.string.isRequired
}
