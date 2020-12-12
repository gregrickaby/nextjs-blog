import fs from 'fs'
import matter from 'gray-matter'
import {join} from 'path'
import remark from 'remark'
import html from 'remark-html'
import {postsDirectory} from './config'

// Set the system path to blog posts.
const systemPath = join(process.cwd(), postsDirectory)

/**
 * Get a single blog post.
 *
 * @param {string} fullPath The full system path.
 * @param {string} path     The relative path.
 * @param {array} fields    Front matter fields.
 * @returns object
 */
export function getSinglePost(fullPath, path, fields = []) {
  // Read contents of a single blog post file.
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Process the front matter.
  const {data, content} = matter(fileContents)

  // Start a post object.
  const post = {}

  // Loop over each field...
  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = createRoute(path)
    }

    if (field === 'content') {
      post[field] = content
    }

    if (data[field]) {
      post[field] = data[field]
    }
  })

  return post
}

/**
 * Sort blog post by date.
 *
 * @param {array} fields The blog post fields.
 * @returns array
 */
export async function sortBlogPosts(fields = []) {
  // Get blog posts.
  const allPosts = await getPosts()

  // Sort blog posts.
  const posts = allPosts
    .map((post) => getSinglePost(post.fullPath, post.path, fields))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1')) // sort posts by date, in descending order.

  return posts
}

/**
 * Get HTML from markdown files.
 *
 * @param {string} markdown The blog post's markdown.
 * @returns string
 */
export async function getHtml(markdown) {
  // Instruct Remark to process Markdown into HTML.
  const processMarkup = await remark().use(html).process(markdown).toString()

  // Convert to a string and resolve the promise.
  const markup = processMarkup.toString()

  return markup
}

/**
 * Get system path based on a slug.
 *
 * @param {array} slug The slug from the browser URL.
 * @returns string
 */
export function getSystemPath(slug) {
  // First, clean up the incoming array.
  const cleanSlug = slug.toString().replace(/,/g, '/')

  // Then, append the file extension.
  const addFileExt = `${cleanSlug}.md`

  // Finally, join with the system path.
  const path = join(systemPath, addFileExt)

  return path
}

/**
 * Get path based on a slug.
 *
 * @param {array} slug The slug from the browser URL.
 * @returns string
 */
export function getPath(slug) {
  // First, clean up the incoming array.
  const cleanSlug = slug.toString().replace(/,/g, '/')

  // Then, append the file extension.
  const addFileExt = `${cleanSlug}.md`

  // Finally, join with the post directory.
  const path = join(postsDirectory, addFileExt)

  return path
}

/**
 * Create a browser friendly route.
 *
 * @param {array} slug A slug from getStaticProps.
 * @returns string
 */
export function createRoute(slug) {
  return slug.toString().replace(/\.md$/, '').replace(`${postsDirectory}/`, '')
}

/**
 * Get all blog posts.
 *
 * @see https://www.npmjs.com/package/readdirp
 * @param {array} posts The list of blog posts.
 * @returns array
 */
export async function getPosts(posts = []) {
  const readdirp = require('readdirp')

  // Configure readdirp settings.
  const settings = {
    fileFilter: ['*.md'], // only include these file types.
    directoryFilter: ['!.git'], // ignore these directories.
    depth: 3 // how deep should it recurse?
  }

  // Loop over all posts and build a list.
  for await (const file of readdirp(systemPath, settings)) {
    posts.push({
      path: file.path,
      fullPath: file.fullPath,
      basename: file.basename
    })
  }

  return posts
}
