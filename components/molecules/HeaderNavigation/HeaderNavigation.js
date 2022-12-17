import config from '@/lib/config'
import Link from 'next/link'
import {Fragment} from 'react'
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
            <Fragment key={index}>
              {' '}
              {index === 0 ? '' : <>&middot;</>}{' '}
              <Link legacyBehavior href={item?.url} prefetch={false}>
                <a className={styles.link}>{item?.label}</a>
              </Link>
            </Fragment>
          )
        })}
    </nav>
  )
}
