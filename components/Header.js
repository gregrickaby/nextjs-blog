import Nav from '@/components/Nav'
import config from '@/functions/config'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between space-y-2">
      <div className="flex flex-col space-y-2">
        <h1 className="text-4xl">
          <Link href="/">
            <a>{config.siteName}</a>
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
