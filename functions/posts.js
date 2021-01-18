import config from '@/functions/config'
import {dateFormatter, mdxFileList} from '@/functions/helpers'
import a11yEmoji from '@fec/remark-a11y-emoji'
import dayjs from 'dayjs'
import fs from 'fs'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import oembed from 'remark-oembed'
import prism from 'remark-prism'

/**
 * Process MDX and front matter for getStaticProps().
 *
 * @author Greg Rickaby
 * @see https://github.com/hashicorp/next-mdx-remote
 * @param {string} directory  The posts directory.
 * @param {string} slug       The post slug you want to query.
 * @param {object} components Optional React components.
 * @return {object}           MDX and front matter.
 */
export async function getPostData(directory, slug, components) {
  const postFilePath = path.join(directory, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const {content, data} = matter(source)
  const mdx = await parseMDX(content, components, data)
  data.date = dateFormatter(data.date)

  return {
    mdx,
    data
  }
}

/**
 * Get posts and their raw data.
 *
 * @author Greg Rickaby
 * @param {string} directory The directory of posts.
 * @return {object}          A list of all posts and their data.
 */
export function getAllPosts(directory) {
  const data = mdxFileList(directory).map((filePath) => {
    const source = fs.readFileSync(path.join(directory, filePath))
    const {content, data} = matter(source)
    data.date = dateFormatter(data.date)

    return {
      content,
      data,
      filePath
    }
  })

  // Sort posts by date, desc.
  const posts = data.sort((post1, post2) => {
    return post1?.data.date > post2?.data.date ? '-1' : '1'
  })

  return posts
}

/**
 * Get all post paths.
 *
 * @author Greg Rickaby
 * @param {string} directory The directory of posts.
 * @return {object}          A list of all posts and their paths.
 */
export function getPostsPath(directory) {
  return mdxFileList(directory)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({params: {slug}}))
}

/**
 * Parse MDX and front matter data.
 *
 * @author Greg Rickaby
 * @see https://github.com/vercel/next.js/tree/master/examples/with-mdx-remote
 * @see https://github.com/remarkjs/remark/blob/main/doc/plugins.md
 * @param {string} content    Markdown content.
 * @param {object} components Any optional React components.
 * @param {object} data       Front matter meta data.
 * @return {object}           Processed post data.
 */
export async function parseMDX(content, components, data) {
  return await renderToString(content, {
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
              'treeview'
            ]
          }
        ]
      ]
    },
    scope: data
  })
}

/**
 * Create and write rss.xml.
 *
 * @author Greg Rickaby
 */
export async function generateRssFeed() {
  const posts = getAllPosts(config.postsDirectory)

  const feed = `
      <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
      <channel>
        <title>${config?.siteName}</title>
        <description>${config?.siteDescription}</description>
        <link>${config?.siteUrl}/rss.xml</link>
        <atom:link href="${
          config?.siteUrl
        }/rss.xml" rel="self" type="application/rss+xml" />
        <language>en-us</language>
        <lastBuildDate>${dayjs(posts[0]?.date).format(
          'ddd, DD MMM YYYY HH:mm:ss ZZ'
        )}</lastBuildDate>
        <managingEditor>${config?.authorEmail} (${
    config?.siteAuthor
  })</managingEditor>
        <webMaster>${config?.authorEmail} (${config?.siteAuthor})</webMaster>
        <generator>https://nextjs.org/</generator>
        <image>
          <url>${config?.siteUrl}${config?.ogImage}</url>
          <title>${config?.siteName}</title>
          <link>${config?.siteUrl}</link>
          <width>144</width>
          <height>144</height>
        </image>
        ${posts.map((post) => {
          return `
        <item>
          <title>${post?.data?.title}</title>
          <description>${post?.data?.excerpt}</description>
          <link>${config?.siteUrl}/blog/${post?.data?.slug}</link>
          <pubDate>${dayjs(post?.data?.date).format(
            'ddd, DD MMM YYYY HH:mm:ss ZZ'
          )}</pubDate>
        </item>`
        })}
      </channel>
    </rss>
  `

  fs.writeFileSync('./public/rss.xml', feed)
}
