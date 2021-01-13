import Link from 'next/link'
import config from '@/functions/config'

/**
 * Render Navigation component.
 *
 * @author Greg Rickaby
 * @return {Element}  The Navigation component.
 */
export default function Nav() {
  return (
    <nav className="self-center space-x-4 mt-4 md:mt-0">
      {!!config.navigation?.length &&
        config?.navigation.map((nav, index) => {
          return (
            <Link key={index} href={nav?.url}>
              <a className="navigation-item">{nav?.label}</a>
            </Link>
          )
        })}
    </nav>
  )
}
