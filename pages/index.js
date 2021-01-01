import Article from '@/components/Article'
import Layout from '@/components/Layout'
import {PAGES_PATH} from '@/functions/getMdx'
import {getPostData} from '@/functions/getPosts'
import hydrate from 'next-mdx-remote/hydrate'

/**
 * Dynamically import components into MDX files.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote#conditional-custom-components
 */
const components = {}

export default function Homepage({source, frontMatter}) {
  const content = hydrate(source, {components})
  return (
    <Layout>
      <Article frontMatter={frontMatter}>{content}</Article>
    </Layout>
  )
}

export async function getStaticProps() {
  const post = await getPostData(PAGES_PATH, 'homepage', components)

  return {
    props: {
      source: post?.mdx,
      frontMatter: post?.data
    }
  }
}
