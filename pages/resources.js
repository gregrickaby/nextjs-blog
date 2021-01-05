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

export default function ResourcesPage({source, frontMatter}) {
  const content = hydrate(source, {components})
  return (
    <Layout
      title={`Resources - ${config?.siteName}`}
      description={frontMatter?.excerpt}
    >
      <ArchiveHeader
        title={frontMatter?.title}
        description={frontMatter.excerpt}
      />
      <article>{content}</article>
    </Layout>
  )
}

export async function getStaticProps() {
  const post = await getPostData(PAGES_PATH, 'resources', components)

  return {
    props: {
      source: post?.mdx,
      frontMatter: post?.data
    }
  }
}
