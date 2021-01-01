import Link from 'next/link'
import config from '@/functions/config'

export default function Nav() {
  return (
    <nav className="align-center space-x-4">
      {config?.length &&
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
