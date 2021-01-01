import {mdxFileList} from '@/functions/getMdx'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

/**
 * Get posts and their data.
 *
 * @param {string} directory The directory of posts.
 * @return {object}
 */
export function getPosts(directory) {
  const data = mdxFileList(directory).map((filePath) => {
    const source = fs.readFileSync(path.join(directory, filePath))
    const {content, data} = matter(source)

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
 * @param {string} directory The directory of posts.
 * @return {object}
 */
export function getPostsPath(directory) {
  return mdxFileList(directory)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({params: {slug}}))
}
