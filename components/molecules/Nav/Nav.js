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
      {!!config.navigation?.length &&
        config?.navigation.map((nav, index) => {
          return (
            <Link key={index} href={nav?.url}>
              <a>{nav?.label}</a>
            </Link>
          )
        })}
    </nav>
  )
}
