import fs from 'fs'
import path, {join} from 'path'
import {POSTS_DIR} from './constants'

// Get the full system path for POST_DIR.
const postSystemDir = join(process.cwd(), POSTS_DIR)

export function getPostSlugs() {
  // Get all of the directories under /post
  const postDirectories = getDirectories(postSystemDir)

  // Set an empty var.
  let slugs = []

  // Map over all directories...
  postDirectories.map((postDir) => {
    // Get the full path to all the directories inside /posts.
    const fullPath = path.join(POSTS_DIR, postDir)

    // Get all the files in each directory.
    const files = fs.readdirSync(fullPath)

    // Map over each file...
    files.map((file) => {
      // Build a real slug for posts.
      const realSlug = join(postDir, file.replace(/\.md$/, ''))

      // Add each slug into slugs array.
      slugs.push(realSlug)
    })
  })

  return slugs
}

/**
 * List all directories inside a directory.
 *
 * @see https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options
 * @see https://nodejs.org/api/fs.html#fs_class_fs_dirent
 * @param {string} source The source directory.
 * return array
 */
export function getDirectories(source) {
  return fs
    .readdirSync(source, {withFileTypes: true})
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}
