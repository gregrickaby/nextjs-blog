import Separator from '@/components/atoms/Separator/Separator'
import config from '@/lib/config'
import cn from 'classnames'
import {Fragment} from 'react'
import styles from './Footer.module.css'

/**
 * Render the Footer component.
 *
 * @author Greg Rickaby
 * @return {Element} The Footer component.
 */
export default function Footer() {
  return (
    <>
      <Separator />
      <footer className={cn(styles.footer)}>
        <nav className={styles.footerNavigation}>
          {!!config.footerNavigation?.length &&
            config?.footerNavigation.map((item, index) => {
              return (
                <Fragment key={index}>
                  {' '}
                  {index === 0 ? '' : <>&middot;</>}{' '}
                  <a className={styles.link} href={item?.url}>
                    {item?.label}
                  </a>
                </Fragment>
              )
            })}
        </nav>
        <div>
          &copy; 2008-{new Date().getFullYear()} &middot; Powered by{' '}
          <a href="https://nextjs.org">Next.js</a>
        </div>
      </footer>
    </>
  )
}
