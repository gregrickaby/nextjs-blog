import config from '@/functions/config'
import Link from 'next/link'
import styles from './HeaderNavigation.module.css'

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
              <a className="no-underline hover:text-gray-900 dark:hover:text-gray-500">
                {item?.label}
              </a>
            </Link>
          )
        })}
    </nav>
  )
}
