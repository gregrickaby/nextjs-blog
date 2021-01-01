import ArchiveHeader from '@/components/ArchiveHeader'
import Layout from '@/components/Layout'
import config from '@/functions/config'
import {BOOKS_PATH} from '@/functions/getMdx'
import {getAllPosts} from '@/functions/getPosts'
import {NextSeo} from 'next-seo'
import Link from 'next/link'

export default function BooksArchive({books}) {
  return (
    <Layout>
      <NextSeo
        title={`Books - ${config?.siteName}`}
        description="A list of books that I&lsquo;ve either written or provided technical
          editorial services for.."
      />
      <ArchiveHeader
        title="Books"
        description="A list of books that I&lsquo;ve either written or provided technical
          editorial services for..."
      />
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
  const books = getAllPosts(BOOKS_PATH)

  return {
    props: {
      books
    }
  }
}
