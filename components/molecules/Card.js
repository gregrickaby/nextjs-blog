import PropTypes from 'prop-types'
import Link from 'next/link'

/**
 * Render the Card component.
 *
 * @author Greg Rickaby
 * @param {object} props          The component attributes as props.
 * @param {object} props.data     The post data.
 * @param {string} props.filePath The MDX file path
 * @param {string} props.path     The post baseline route, e.g. /blog
 * @return {Element}              The Card component.
 */
export default function Card(props) {
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
        <div className="p-4 h-48 flex items-center">
          <Link
            as={`/${props?.path}/${props?.data?.slug}`}
            href={`/${props?.path}/[slug]`}
          >
            <a className="text-white shadow-lg no-underline hover:underline">
              <h3
                className="m-0 p-0 leading-tight"
                dangerouslySetInnerHTML={{__html: props?.data?.title}}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <p
          className="text-gray-600 text-sm mb-0 dark:text-gray-100"
          dangerouslySetInnerHTML={{__html: props?.data?.excerpt}}
        />
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    coverImage: PropTypes.string,
    excerpt: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string
  }),
  path: PropTypes.string.isRequired
}
