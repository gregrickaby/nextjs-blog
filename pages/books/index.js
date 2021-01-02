import ArchiveHeader from '@/components/ArchiveHeader'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import config from '@/functions/config'
import {BOOKS_PATH} from '@/functions/getMdx'
import {getAllPosts} from '@/functions/getPosts'
import {NextSeo} from 'next-seo'

export default function BooksArchive({books}) {
  return (
    <Layout>
      <NextSeo
        title={`Books - ${config?.siteName}`}
        description="A list of books that I&lsquo;ve either written or provided technical
          editorial services for."
      />
      <ArchiveHeader
        title="Books"
        description="A list of books that I&lsquo;ve either written or provided technical
          editorial services for."
      />
      <div className="grid gap-12 md:grid-cols-2">
        {books?.length &&
          books?.map((book, index) => (
            <Card key={index} props={book} path="books" />
          ))}
      </div>
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
