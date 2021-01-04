import PropTypes from 'prop-types'
import dayjs from 'dayjs'

export default function PostHeader({props}) {
  return (
    <header className="text-center pb-4">
      <time
        className="font-sans text-sm text-gray-500"
        dateTime={dayjs(props?.frontMatter?.date).toISOString()}
      >
        {dayjs(props?.frontMatter?.date).format('MMM DD, YYYY')}
      </time>
      <h1
        className="mb-3"
        dangerouslySetInnerHTML={{__html: props?.frontMatter?.title}}
      />
      {props?.frontMatter?.excerpt && (
        <p
          className="font-sans leading-tight tracking-tight text-gray-500"
          dangerouslySetInnerHTML={{__html: props?.frontMatter?.excerpt}}
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
