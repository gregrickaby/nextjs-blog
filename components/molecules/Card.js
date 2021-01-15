import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Card.module.css'
import cn from 'classnames'

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
  const backgroundGradient = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url(${props?.data?.coverImage})`
  }
  return (
    <div className={styles.card}>
      <div
        className={cn(styles.backgroundWrap, 'bg-size')}
        style={backgroundGradient}
      >
        <div className={styles.cardInner}>
          <Link
            as={`/${props?.path}/${props?.data?.slug}`}
            href={`/${props?.path}/[slug]`}
          >
            <a className={styles.cardLink}>
              <h3
                className={styles.cardTitle}
                dangerouslySetInnerHTML={{__html: props?.data?.title}}
              />
            </a>
          </Link>
        </div>
      </div>
      <p
        className={cn(styles.cardExcerpt, 'dark:text-gray-100')}
        dangerouslySetInnerHTML={{__html: props?.data?.excerpt}}
      />
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
