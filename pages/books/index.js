import Layout from '@/components/Layout'
import {BOOKS_PATH, mdxFileList} from '@/functions/getMdx'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

export default function PostArchive({posts}) {
  return (
    <Layout>
      <h1>Books</h1>
      <p>
        A list of books that I&lsquo;ve either written or provided technical
        editorial services for.
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`/books/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/books/[slug]`}
            >
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = mdxFileList(BOOKS_PATH).map((filePath) => {
    const source = fs.readFileSync(path.join(BOOKS_PATH, filePath))
    const {content, data} = matter(source)

    return {
      content,
      data,
      filePath
    }
  })

  return {props: {posts}}
}
