import Layout from '@/components/Layout'
import {PAGES_PATH} from '@/functions/getMdx'
import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import path from 'path'

/**
 * Dynamically import components into MDX files.
 */
const components = {
  Article: dynamic(() => import('../components/Article'))
}

export default function Home({source, frontMatter}) {
  const content = hydrate(source, {components})
  return (
    <Layout>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.excerpt && (
          <p className="description">{frontMatter.excerpt}</p>
        )}
      </div>
      <main>{content}</main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const postFilePath = path.join(PAGES_PATH, 'homepage.mdx')
  const source = fs.readFileSync(postFilePath)
  const {content, data} = matter(source)
  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    scope: data
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}
