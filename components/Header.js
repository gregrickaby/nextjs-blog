import config from '@/functions/config'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="space-y-2">
      <h1 className="text-4xl">
        <Link href="/">
          <a>{config.siteName}</a>
        </Link>
      </h1>
      <p className="text-1xl">{config.siteDescription}</p>
    </header>
  )
}
