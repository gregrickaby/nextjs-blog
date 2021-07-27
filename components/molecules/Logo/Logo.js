import config from '@/functions/config'
import Link from 'next/link'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logoWrap}>
      <Link href="/" prefetch={false}>
        <a className={styles.logoLink}>
          <img
            alt={config?.siteAuthor}
            className={styles.logo}
            decoding="async"
            height="80"
            loading="eager"
            src={config.authorAvatar}
            width="80"
          />
        </a>
      </Link>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>{config?.siteName}</h1>
        <p className={styles.description}>{config?.siteDescription}</p>
      </div>
    </div>
  )
}
