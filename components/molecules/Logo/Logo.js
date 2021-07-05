import config from '@/functions/config'
import cn from 'classnames'
import Link from 'next/link'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logoWrap}>
      <Link href="/">
        <a className={styles.logoLink}>
          <picture>
            <source
              type="image/avif"
              srcSet="/blog/authors/greg.avif"
              className={styles.logo}
            />
            <source
              type="image/webp"
              srcSet="/blog/authors/greg.webp"
              className={styles.logo}
            />
            <img
              alt={config?.siteAuthor}
              className={styles.logo}
              decoding="async"
              height="80"
              loading="eager"
              src={config.authorAvatar}
              width="80"
            />
          </picture>
        </a>
      </Link>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>{config?.siteName}</h1>
        <p className={cn(styles.description, 'dark:text-gray-400')}>
          {config?.siteDescription}
        </p>
      </div>
    </div>
  )
}
