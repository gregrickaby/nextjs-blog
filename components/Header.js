import Nav from '@/components/Nav'
import config from '@/functions/config'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-col text-center md:flex-row justify-between space-y-2">
      <div className="flex flex-col">
        <h1 className="text-4xl font-sans">
          <Link href="/">
            <a className="no-underline">{config.siteName}</a>
          </Link>
        </h1>
        <p className="text-1xl">{config.siteDescription}</p>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  )
}
