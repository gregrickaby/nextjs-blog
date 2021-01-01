import Layout from '@/components/Layout'
import {getPostsPath, POSTS_PATH} from '@/functions/getMdx'
import a11yEmoji from '@fec/remark-a11y-emoji'
import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import oembed from 'remark-oembed'
import prism from 'remark-prism'

/**
 * Dynamically import components into MDX files.
 */
const components = {}

export default function Post({source, frontMatter}) {
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

export const getStaticPaths = async () => {
  const paths = getPostsPath(POSTS_PATH)

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
