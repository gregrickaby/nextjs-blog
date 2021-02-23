import HeaderNavigation from '@/components/molecules/HeaderNavigation/HeaderNavigation'
import config from '@/functions/config'
import cn from 'classnames'
import Link from 'next/link'
import styles from './Header.module.css'

/**
 * Render Header component.
 *
 * @author Greg Rickaby
 * @return {Element} The Header component.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <Link href="/">
          <a className={styles.logoLink}>
            <img
              alt={config?.siteAuthor}
              className={styles.logo}
              decode="async"
              height="80"
              loading="lazy"
              src={config?.authorAvatar}
              width="80"
            />
          </a>
        </Link>
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>{config?.siteName}</h1>
          <p className={cn(styles.description, 'dark:text-gray-400')}>
            {config?.siteDescription}
          </p>
        </div>
      </div>
      <HeaderNavigation />
    </header>
  )
}
