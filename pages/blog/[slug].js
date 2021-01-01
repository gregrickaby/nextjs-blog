import Layout from '@/components/Layout'
import {POSTS_PATH} from '@/functions/getMdx'
import {getPostsPath, getPostData} from '@/functions/getPosts'
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
      <div className="pb-2">
        <h1 className="post-title leading-tight mt-2 mb-1 text-center md:text-left">
          {frontMatter?.title}
        </h1>
        {frontMatter?.excerpt && (
          <p className="font-sans text-gray-500 mb-8">{frontMatter?.excerpt}</p>
        )}
      </div>
      <main className="space-y-6">{content}</main>
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
