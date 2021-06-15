import config from '@/functions/config'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logoWrap}>
      <Link href="/">
        <a className={styles.logoLink}>
          <Image
            alt={config?.siteAuthor}
            blurDataURL={config.base64Image}
            className={styles.logo}
            height="80"
            placeholder="blur"
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
  )
}
