import Article from '@/components/Article'
import Layout from '@/components/Layout'
import {POSTS_PATH} from '@/functions/getMdx'
import {getPostData, getPostsPath} from '@/functions/getPosts'
import hydrate from 'next-mdx-remote/hydrate'

/**
 * Dynamically import components into MDX files.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote#conditional-custom-components
 */
const components = {}

export default function BlogPost({source, frontMatter}) {
  const content = hydrate(source, {components})
  return (
    <Layout>
      <Article frontMatter={frontMatter}>{content}</Article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getPostsPath(POSTS_PATH)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const post = await getPostData(POSTS_PATH, params.slug, components)

  return {
    props: {
      source: post?.mdx,
      frontMatter: post?.data
    }
  }
}
