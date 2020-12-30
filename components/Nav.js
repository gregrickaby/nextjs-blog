import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex space-x-4">
      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href="/photos">
        <a>Photos</a>
      </Link>
    </nav>
  )
}
