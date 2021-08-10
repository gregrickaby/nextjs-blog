import {dateFormatter, mdxFileList} from '@/lib/helpers'
import a11yEmoji from '@fec/remark-a11y-emoji'
import fs from 'fs'
import matter from 'gray-matter'
import {serialize} from 'next-mdx-remote/serialize'
import path from 'path'
import readingTime from 'reading-time'
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
export async function getPostData(directory, slug) {
  const postFilePath = path.join(directory, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const {content, data} = matter(source)
  const mdx = await serialize(content, {
    scope: {data},
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
    }
  })
  data.date = dateFormatter(data.date)
  data.readingtime = readingTime(mdx.compiledSource)

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
