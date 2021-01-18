import config from '@/functions/config'
import Link from 'next/link'
import styles from './headerNavigation.module.css'

/**
 * Render Navigation component.
 *
 * @author Greg Rickaby
 * @return {Element} The Navigation component.
 */
export default function HeaderNavigation() {
  return (
    <nav className={styles.headerNavigation}>
      {!!config.headerNavigation?.length &&
        config?.headerNavigation.map((item, index) => {
          return (
            <Link key={index} href={item?.url}>
              <a>{item?.label}</a>
            </Link>
          )
        })}
    </nav>
  )
}
