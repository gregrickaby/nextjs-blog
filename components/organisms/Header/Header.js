import HeaderNavigation from '@/components/molecules/HeaderNavigation/HeaderNavigation'
import config from '@/functions/config'
import cn from 'classnames'
import Image from 'next/image'
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
            <Image
              alt={config?.siteAuthor}
              className={styles.logo}
              height="80"
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
