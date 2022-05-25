import config from '@/lib/config'
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
            <>
              {' '}
              {index === 0 ? '' : <>&middot;</>}{' '}
              <Link key={index} href={item?.url} prefetch={false}>
                <a className={styles.link}>{item?.label}</a>
              </Link>
            </>
          )
        })}
    </nav>
  )
}
