import fs from 'fs'
import matter from 'gray-matter'
import {join} from 'path'
import remark from 'remark'
import html from 'remark-html'
import {postsDirectory} from './config'

// Set the system path to blog posts.
const systemPath = join(process.cwd(), postsDirectory)

/**
 * Get front-matter from a blog post.
 *
 * @param {array} path    The blog post path.
 * @param {array} fields  Front matter fields.
 * @returns {object}
 */
export function getSinglePostMeta(path, fields = []) {
  // Read a file based on the real path.
  const fileContents = fs.readFileSync(getSystemPath(path), 'utf8')

  // Process the file with gray matter.
  const {data, content} = matter(fileContents)

  // Start an object.
  const meta = {}

  // Loop over each field...
  fields.forEach((field) => {
    if (field === 'slug') {
      meta[field] = createRoute(path)
    }
    if (field === 'content') {
      meta[field] = content
    }

    if (data[field]) {
      meta[field] = data[field]
    }
  })

  return meta
}

/**
 * Create a list of blog posts and then sort them.
 *
 * @param {array} fields  The blog post fields.
 * @returns {array}
 */
export function getAllPostsDesc(fields = []) {
  // Get blog post slugs.
  const slugs = getPosts()

  console.log(slugs)

  // Sort blog posts.
  const posts = slugs
    .map((slug) => getSinglePostMeta(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1')) // sort posts by date, in descending order.

  return posts
}

/**
 * Get HTML from markdown files.
 *
 * @param {string} markdown The blog post Markdown.
 * @returns {string}
 */
export async function getHtml(markdown) {
  // Instruct Remark to process Markdown into HTML.
  const markup = await remark().use(html).process(markdown)

  return markup.toString()
}

/**
 * Get system path to markdown files.
 *
 * @param {array} slug The blog post slug.
 * @returns {string}
 */
export function getSystemPath(slug) {
  // Convert slug into system path to the markdown file.
  const systemPath = slug.toString().replace(/\.md$/, '').replace(/,/g, '/')

  return join(postsDirectory, `${systemPath}.md`)
}

/**
 * Create a browser friendly route.
 *
 * @param {array} slug A slug from getStaticProps.
 * @returns {string}
 */
export function createRoute(slug) {
  // Convert an array into a browser friendly slug.
  const route = slug
    .toString()
    .replace(/\.md$/, '')
    .replace(`${postsDirectory}/`, '')

  return route
}

/**
 * Get all blog posts.
 *
 * @see https://www.npmjs.com/package/readdirp
 * @returns array
 */
export async function getPosts(posts = []) {
  // Use readdirp to do the heavy lifting.
  const readdirp = require('readdirp')

  // Configure settings.
  const settings = {
    fileFilter: ['*.md', '*.mdx'], // only include these file types.
    directoryFilter: ['!.git'], // ignore these directories.
    depth: 3 // how deep should it recurse?
  }

  // Get all posts.
  const files = await readdirp.promise(systemPath, settings)

  // Map over and create list.
  files.map((file) => {
    posts.push({
      path: file.path,
      fullPath: file.fullPath,
      basename: file.basename
    })
  })

  return posts
}
