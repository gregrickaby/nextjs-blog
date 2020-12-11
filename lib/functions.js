import fs from 'fs'
import matter from 'gray-matter'
import path, {join} from 'path'
import remark from 'remark'
import html from 'remark-html'
import {POSTS_DIR, POST_SYSTEM_DIR} from './constants'

/**
 * Convert a markdown file and front-matter into a blog post.
 *
 * @param {array} path    The blog post path.
 * @param {array} fields  Front matter fields.
 * @returns {object}      The blog post.
 */
export function createSinglePost(path, fields = []) {
  // Read a file based on the real path.
  const fileContents = fs.readFileSync(getFullPath(path), 'utf8')

  // Process the file with gray matter.
  const {data, content} = matter(fileContents)

  // Start an object.
  const items = {}

  // Loop over each field and build the post.
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = createBrowserSlug(path)
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

/**
 * Create a list of all blog posts and their slugs.
 *
 * @returns {array} The list of all blog posts.
 */
export function getPostSlugs() {
  // Get all of the directories under /post
  const postDirectories = getDirectories(POST_SYSTEM_DIR)

  // Start an array.
  let slugs = []

  // Map over all directories...
  postDirectories.map((postDir) => {
    // Get the full path to all the directories inside /__posts.
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
 * Create a list of blog posts and then sort them.
 *
 * @param {array} fields  The blog post fields.
 * @returns {array}       A list of blog sorted by date.
 */
export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => createSinglePost(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

/**
 * Convert slug into full system path to the markdown file.
 *
 * @param {array} slug The blog post slug.
 * @returns {string}   The full system path to file.
 */
export function getFullPath(slug) {
  // Convert the array to a string, replace the .md file extension and any commas with a /
  const cleanSlug = slug.toString().replace(/\.md$/, '').replace(/,/g, '/')

  // Prepend the POST_DIR, and append the .md file extension.
  const fullPath = join(POSTS_DIR, `${cleanSlug}.md`)

  return fullPath
}

/**
 * Convert an array into a browser friendly slug.
 *
 * @param {array} slug A slug from getStaticProps.
 * @returns {string}   A browser friendly slug
 */
export function createBrowserSlug(slug) {
  return slug.toString().replace(/\.md$/, '').replace(`${POSTS_DIR}/`, '')
}

/**
 * List all sub-directories from inside a directory.
 *
 * @see https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options
 * @see https://nodejs.org/api/fs.html#fs_class_fs_dirent
 * @param {string} source  The source directory.
 * returns {array}         All of the sub-directories
 */
export function getDirectories(source) {
  return fs
    .readdirSync(source, {withFileTypes: true})
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
