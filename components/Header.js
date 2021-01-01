import Nav from '@/components/Nav'
import config from '@/functions/config'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between text-center md:text-left">
      <div className="md:flex">
        <Link href="/">
          <a className="shadow-none no-underline">
            <Image
              alt={config?.siteAuthor}
              className="rounded-full"
              height="80"
              layout="fixed"
              quality="100"
              src={config?.authorAvatar}
              width="80"
            />
          </a>
        </Link>
        <div className="flex flex-col justify-center md:ml-4 font-sans md:mx-0">
          <h1 className="leading-none font-bold">{config?.siteName}</h1>
          <p>{config?.siteDescription}</p>
        </div>
      </div>
      <Nav />
    </header>
  )
}
