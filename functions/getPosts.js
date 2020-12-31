import {postDirectory} from '@/functions/config'
import fs from 'fs'
import path from 'path'

/**
 * Set the full post path.
 */
export const POSTS_PATH = path.join(process.cwd(), postDirectory)

/**
 * List of all blog posts.
 */
export const postFiles = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))
