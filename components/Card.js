import PropTypes from 'prop-types'
import Link from 'next/link'

export default function Card({props, path}) {
  return (
    <div className="shadow rounded-b">
      <div
        className="bg-size bg-cover bg-center rounded-t"
        style={{
          /* stylelint-disable */
          backgroundImage: `linear-gradient(
              0deg,
              rgba(
                0,
                0,
                0,
                0.9
              ),
              rgba(
                0,
                0,
                0,
                0.1
              )
            ),
            url(${props?.data?.coverImage})`
        }}
      >
        <div className="p-4 h-32 flex items-end">
          <Link as={`/${path}/${props?.data?.slug}`} href={`/${path}/[slug]`}>
            <a className="text-white shadow-lg no-underline hover:underline">
              <h3
                className="mb-2"
                dangerouslySetInnerHTML={{__html: props?.data?.title}}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <p
          className="text-gray-600 text-sm mb-0"
          dangerouslySetInnerHTML={{__html: props?.data?.excerpt}}
        />
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    excerpt: PropTypes.string,
    category: PropTypes.array,
    tags: PropTypes.array,
    slug: PropTypes.string
  })
}
