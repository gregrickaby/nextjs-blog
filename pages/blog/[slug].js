import Layout from '@/components/Layout'
import {postFiles, POSTS_PATH} from '@/functions/getPosts'
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
  Article: dynamic(() => import('../../components/Article'))
}

export default function Post({source, frontMatter}) {
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

export const getStaticPaths = async () => {
  const paths = postFiles
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({params: {slug}}))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
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
