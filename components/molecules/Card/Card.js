import cn from 'classnames'
import dayjs from 'dayjs'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

/**
 * Render the Card component.
 *
 * @author Greg Rickaby
 * @param {object} props The component attributes as props.
 * @return {Element}     The Card component.
 */
export default function Card(props) {
  return (
    <article className={styles.card}>
      <header>
        {!!props?.data?.date && (
          <time
            className={styles.cardDate}
            dateTime={dayjs(props?.data?.date).format()}
          >
            {dayjs(props?.data?.date).format('MMMM D, YYYY')}
          </time>
        )}
        <Link
          as={`/${props?.path}/${props?.data?.slug}`}
          href={`/${props?.path}/[slug]`}
          prefetch={false}
        >
          <a className={styles.cardLink}>
            <h3
              className={styles.cardTitle}
              dangerouslySetInnerHTML={{__html: props?.data?.title}}
            />
          </a>
        </Link>
      </header>
      <p
        className={cn(styles.cardExcerpt, 'dark:text-gray-100')}
        dangerouslySetInnerHTML={{__html: props?.data?.excerpt}}
      />
    </article>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.any,
    coverImage: PropTypes.string,
    date: PropTypes.string,
    excerpt: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string
  }),
  path: PropTypes.string.isRequired
}
