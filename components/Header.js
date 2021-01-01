import Nav from '@/components/Nav'
import config from '@/functions/config'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between text-center md:text-left">
      <div className="md:flex">
        <Image
          alt={config?.siteAuthor}
          className="rounded-full"
          height="96"
          layout="fixed"
          quality="100"
          src={config?.authorAvatar}
          width="96"
        />
        <div className="flex flex-col justify-center md:ml-4 font-sans md:mx-0">
          <h1 className="leading-none font-bold">{config?.siteName}</h1>
          <p>{config?.siteDescription}</p>
        </div>
      </div>
      <Nav />
    </header>
  )
}
