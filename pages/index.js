import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Visit the{' '}
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </p>
    </>
  )
}
