import config from '@/functions/config'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import styles from './Footer.module.css'

/**
 * Only render <DisplayOptions /> client side.
 *
 * @see https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
 */
const DisplayOptions = dynamic(
  () => import('@/components/atoms/DisplayOptions/DisplayOptions'),
  {
    ssr: false
  }
)

/**
 * Render the Footer component.
 *
 * @author Greg Rickaby
 * @return {Element} The Footer component.
 */
export default function Footer() {
  return (
    <>
      <footer className={cn(styles.footer)}>
        <div className={styles.social}>
          {!!config.footerNavigation?.length &&
            config?.footerNavigation.map((item, index) => {
              return (
                <a key={index} href={item?.url}>
                  {item?.label}
                </a>
              )
            })}
        </div>
        <div>
          &copy; 2008-{new Date().getFullYear()} &middot; Powered by{' '}
          <a href="https://nextjs.org">Next.js</a>
        </div>
      </footer>
      <DisplayOptions />
    </>
  )
}
