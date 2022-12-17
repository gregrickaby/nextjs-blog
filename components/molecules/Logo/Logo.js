import config from '@/lib/config'
import Image from 'next/image'
import Link from 'next/link'
import siteLogo from '../../../public/blog/authors/greg-rickaby.jpg'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logoWrap}>
      <Link legacyBehavior href="/" prefetch={false}>
        <a className={styles.logoLink} aria-label="click to go home">
          <Image
            alt=""
            className={styles.logo}
            height="70"
            loading="eager"
            placeholder="blur"
            src={siteLogo}
            width="70"
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
