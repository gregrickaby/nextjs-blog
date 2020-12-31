import Layout from '@/components/Layout'
import {PAGES_PATH} from '@/functions/getMdx'
import a11yEmoji from '@fec/remark-a11y-emoji'
import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import path from 'path'
import oembed from 'remark-oembed'
import prism from 'remark-prism'
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
      remarkPlugins: [
        a11yEmoji,
        [oembed, {syncWidget: true}],
        [
          prism,
          {
            transformInlineCode: true,
            plugins: [
              'autolinker',
              'command-line',
              'clipboard',
              'data-uri-highlight',
              'diff-highlight',
              'inline-color',
              'keep-markup',
              'line-numbers',
              'show-invisibles',
              'treeview'
            ]
          }
        ]
      ]
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
