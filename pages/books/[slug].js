import PropTypes from 'prop-types'
import Article from '@/components/molecules/Article'
import Layout from '@/components/organisms/Layout'
import config from '@/functions/config'
import {BOOKS_PATH} from '@/functions/getMdx'
import {getPostData, getPostsPath} from '@/functions/getPosts'
import hydrate from 'next-mdx-remote/hydrate'

/**
 * Pass components into MDX files.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote#conditional-custom-components
 */
const components = {}

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
  const content = hydrate(source, {components})
  return (
    <Layout
      title={`${frontMatter.title} - ${config?.siteName}`}
      description={frontMatter?.excerpt}
      openGraph={{
        title: `${frontMatter.title} - ${config?.siteName}`,
        description: frontMatter?.excerpt,
        images: [
          {
            url: `${config.siteUrl}${frontMatter?.coverImage}`,
            alt: frontMatter?.title
          }
        ]
      }}
    >
      <Article {...frontMatter}>{content}</Article>
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
      source: post?.mdx,
      frontMatter: post?.data
    }
  }
}
