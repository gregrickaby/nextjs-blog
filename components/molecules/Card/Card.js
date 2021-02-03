import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

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
    <article className={styles.card}>
      <div className={styles.backgroundWrap}>
        <Link
          as={`/${props?.path}/${props?.data?.slug}`}
          href={`/${props?.path}/[slug]`}
        >
          <a className={styles.cardLink}>
            <Image
              alt={props?.data?.title}
              className={styles.image}
              layout="fill"
              src={props?.data?.coverImage}
            />
          </a>
        </Link>
      </div>

      <div className={styles.cardInner}>
        {!!props?.data?.category && (
          <p className={cn(styles.cardMeta, 'text-sm')}>
            {props?.data?.category}
          </p>
        )}
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
        <p
          className={cn(styles.cardExcerpt, 'dark:text-gray-100')}
          dangerouslySetInnerHTML={{__html: props?.data?.excerpt}}
        />
      </div>
    </article>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    coverImage: PropTypes.string,
    excerpt: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string
  }),
  path: PropTypes.string.isRequired
}
