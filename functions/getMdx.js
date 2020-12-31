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
 */
export const mdxFileList = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))
