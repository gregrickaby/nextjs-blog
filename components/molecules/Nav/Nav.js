import config from '@/functions/config'
import Link from 'next/link'
import styles from './Nav.module.css'

/**
 * Render Navigation component.
 *
 * @author Greg Rickaby
 * @return {Element} The Navigation component.
 */
export default function Nav() {
  return (
    <nav className={styles.nav}>
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
