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
 * Render the ContactPage component.
 *
 * @author Greg Rickaby
 * @param {object} props             The component attributes as props.
 * @param {object} props.source      The page content.
 * @param {object} props.frontMatter The page meta data.
 * @return {Element}                 The ContactPage component.
 */
export default function ContactPage({source, frontMatter}) {
  const content = hydrate(source, {components})
  return (
    <Layout
      title={`Contact - ${config?.siteName}`}
      description={frontMatter?.excerpt}
    >
      <ArchiveHeader title={frontMatter?.title} />
      <article>{content}</article>
    </Layout>
  )
}

ContactPage.propTypes = {
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
  const post = await getPostData(PAGES_PATH, 'contact', components)

  return {
    props: {
      source: post?.mdx,
      frontMatter: post?.data
    }
  }
}
