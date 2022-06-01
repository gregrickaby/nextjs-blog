import Article from '@/components/molecules/Article/Article'
import Layout from '@/components/templates/Layout/Layout'
import config from '@/lib/config'
import {BOOKS_PATH} from '@/lib/helpers'
import {getPostData, getPostsPath} from '@/lib/posts'
import dayjs from 'dayjs'
import {MDXRemote} from 'next-mdx-remote'
import Head from 'next/head'
import Image from 'next/image'
import PropTypes from 'prop-types'

/**
 * Pass components into MDX files.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote#conditional-custom-components
 */
const components = {
  Image
}

/**
 * Render the BookPost component.
 *
 * @author Greg Rickaby
 * @param {object} props             The component attributes as props.
 * @param {object} props.source      The book content.
 * @param {object} props.frontMatter The book meta data.
 * @return {Element}                 The BookPost component.
 */
export default function BookPost({source, frontMatter}) {
  const openGraphImage = frontMatter?.ogImage
    ? `${config?.siteUrl}${frontMatter?.ogImage}`
    : `${config?.siteUrl}${config?.ogImage}`

  return (
    <Layout
      title={`${frontMatter.title} - ${config?.siteName}`}
      description={frontMatter?.excerpt}
      openGraph={{
        title: `${frontMatter.title} - ${config?.siteName}`,
        description: frontMatter?.excerpt,
        type: 'book',
        book: {
          releaseDate: dayjs(frontMatter?.releaseDate).toISOString(),
          isbn: frontMatter?.isbn,
          authors: [frontMatter?.bookAuthor]
        },
        images: [
          {
            url: openGraphImage,
            alt: 'cover of the book'
          }
        ]
      }}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Book",
              "@id": "${frontMatter?.trustedID}",
              "name": "${frontMatter?.title}",
              "datePublished": "${dayjs(frontMatter?.published).toISOString()}",
              "author": {
                "@type": "Person",
                "name": "${frontMatter?.bookAuthor}",
                "sameas": "${frontMatter?.bookAuthorISNI}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "${frontMatter?.publisher}"
              },
              "url": "${config?.siteUrl}/books/${frontMatter?.slug}",
              "image": "${openGraphImage}",
              "description": "${frontMatter?.excerpt}",
              "workExample": [{
                "@type": "Book",
                "isbn": "${frontMatter?.isbn13}",
                "numberofpages": "${frontMatter?.numberOfPages}",
                "bookFormat": "${frontMatter?.bookFormat}",
                "exampleofwork": "${frontMatter?.trustedID}"
              }]
            }`
          }}
        />
      </Head>
      <Article {...frontMatter}>
        <MDXRemote {...source} components={components} />
      </Article>
    </Layout>
  )
}

BookPost.propTypes = {
  frontMatter: PropTypes.object.isRequired,
  source: PropTypes.object.isRequired
}

/**
 * Get static paths.
 *
 * @author Greg Rickaby
 * @return {object} All book paths.
 */
export async function getStaticPaths() {
  const paths = getPostsPath(BOOKS_PATH)

  return {
    paths,
    fallback: false
  }
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @param {object} context        Incoming context.
 * @param {object} context.params The route parameters.
 * @return {object}               All book props.
 */
export async function getStaticProps({params}) {
  const post = await getPostData(BOOKS_PATH, params.slug, components)

  return {
    props: {
      source: post?.mdxSource,
      frontMatter: post?.data
    }
  }
}
