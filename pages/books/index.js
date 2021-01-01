import Layout from '@/components/Layout'
import {BOOKS_PATH} from '@/functions/getMdx'
import {getPosts} from '@/functions/getPosts'
import Link from 'next/link'

export default function BooksArchive({books}) {
  return (
    <Layout>
      <div className="pb-4">
        <h1>Books</h1>
        <p>
          A list of books that I&lsquo;ve either written or provided technical
          editorial services for...
        </p>
      </div>
      <ul>
        {books?.length &&
          books?.map((book) => (
            <li key={book?.filePath}>
              <Link
                as={`/books/${book?.filePath.replace(/\.mdx?$/, '')}`}
                href={`/books/[slug]`}
              >
                <a>{book?.data.title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  )
}

export function getStaticProps() {
  const books = getPosts(BOOKS_PATH)

  return {
    props: {
      books
    }
  }
}
