import PropTypes from 'prop-types'
import Layout from '@/components/Layout'
import ArchiveHeader from '@/components/ArchiveHeader'
import config from '@/functions/config'
import {PAGES_PATH} from '@/functions/getMdx'
import {getPostData} from '@/functions/getPosts'
import hydrate from 'next-mdx-remote/hydrate'

/**
 * Dynamically import components into MDX files.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote#conditional-custom-components
 */
const components = {}

/**
 * Render the ResourcesPage component.
 *
 * @author Greg Rickaby
 * @param {object} props             The component attributes as props.
 * @param {object} props.source      The page content.
 * @param {object} props.frontMatter The page meta data.
 * @return {Element}                 The ResourcesPage component.
 */
export default function ResourcesPage({source, frontMatter}) {
  const content = hydrate(source, {components})
  return (
    <Layout
      title={`Resources - ${config?.siteName}`}
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
      <ArchiveHeader
        title={frontMatter?.title}
        description={frontMatter.excerpt}
      />
      <article>{content}</article>
    </Layout>
  )
}

ResourcesPage.propTypes = {
  frontMatter: PropTypes.object.isRequired,
  source: PropTypes.object.isRequired
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @return {object} All page props.
 */
export async function getStaticProps() {
  const post = await getPostData(PAGES_PATH, 'resources', components)

  return {
    props: {
      source: post?.mdx,
      frontMatter: post?.data
    }
  }
}
