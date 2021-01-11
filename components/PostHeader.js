import PropTypes from 'prop-types'
import dayjs from 'dayjs'

export default function PostHeader(props) {
  return (
    <header className="text-center space-y-8">
      <time
        className="font-sans text-gray-500 dark:text-gray-100"
        dateTime={dayjs(props?.date).toISOString()}
      >
        {dayjs(props?.date).format('MMM DD, YYYY')}
      </time>
      <h1
        className="text-6xl leading-tight tracking-tight wide"
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
