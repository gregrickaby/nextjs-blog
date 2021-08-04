import Card from '@/components/molecules/Card/Card'
import PageHeader from '@/components/molecules/PageHeader/PageHeader'
import Layout from '@/components/templates/Layout/Layout'
import config from '@/lib/config'
import {BOOKS_PATH} from '@/lib/helpers'
import {getAllPosts} from '@/lib/posts'
import PropTypes from 'prop-types'

/**
 * Render the BooksArchive component.
 *
 * @author Greg Rickaby
 * @param {object} props       The component attributes as props.
 * @param {any}    props.books The books data.
 * @return {Element} The BooksArchive component.
 */
export default function BooksArchive({books}) {
  return (
    <Layout
      title={`Books - ${config?.siteName}`}
      description="Books that I&lsquo;ve either written or provided technical
          editorial services for."
    >
      <PageHeader title="Books" />
      <div className="grid gap-8">
        {!!books?.length &&
          books.map((book, index) => (
            <Card key={index} {...book} path="books" />
          ))}
      </div>
    </Layout>
  )
}

BooksArchive.propTypes = {
  books: PropTypes.any.isRequired
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @return {object} All book props.
 */
export function getStaticProps() {
  const books = getAllPosts(BOOKS_PATH)

  return {
    props: {
      books
    }
  }
}
