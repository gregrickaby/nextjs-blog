import Excerpt from '@/components/atoms/Excerpt/Excerpt'
import Meta from '@/components/atoms/Meta/Meta'
import cn from 'classnames'
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
        {!!props?.data?.date && <Meta {...props?.data} />}
        <Link
          as={`/${props?.path}/${props?.data?.slug}`}
          href={`/${props?.path}/[slug]`}
          prefetch={false}
        >
          <a className={cn(styles.cardLink, 'no-underline hover:underline')}>
            <h2
              className={styles.cardTitle}
              dangerouslySetInnerHTML={{__html: props?.data?.title}}
            />
          </a>
        </Link>
      </header>
      <Excerpt {...props?.data} />
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
