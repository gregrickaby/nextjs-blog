import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="align-center space-x-4">
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/books">
        <a>Books</a>
      </Link>

      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href="/photos">
        <a>Photos</a>
      </Link>
    </nav>
  )
}
