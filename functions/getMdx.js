import {pageDirectory, postDirectory} from '@/functions/config'
import fs from 'fs'
import path from 'path'

export const PAGES_PATH = path.join(process.cwd(), pageDirectory)
export const POSTS_PATH = path.join(process.cwd(), postDirectory)

/**
 * List of all .mdx files.
 */
export const mdxFileList = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))
