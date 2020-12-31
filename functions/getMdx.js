import {
  booksDirectory,
  pagesDirectory,
  postsDirectory
} from '@/functions/config'
import fs from 'fs'
import path from 'path'

export const BOOKS_PATH = path.join(process.cwd(), booksDirectory)
export const PAGES_PATH = path.join(process.cwd(), pagesDirectory)
export const POSTS_PATH = path.join(process.cwd(), postsDirectory)

/**
 * List of all .mdx files.
 *
 * @param {string} directory. Full path to a directory with .mdx files.
 * @return {array}
 */
export function mdxFileList(directory) {
  // No directory? Bail.
  if (!directory) {
    return null
  }

  return fs.readdirSync(directory).filter((path) => /\.mdx?$/.test(path))
}
