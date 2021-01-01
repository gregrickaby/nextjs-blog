import Layout from '@/components/Layout'
import {BOOKS_PATH, mdxFileList} from '@/functions/getMdx'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

export default function PostArchive({posts}) {
  return (
    <Layout>
      <div className="pb-4">
        <h1>Books</h1>
        <p>
          A list of books that I&lsquo;ve either written or provided technical
          editorial services for...
        </p>
      </div>
      <ul>
        {posts?.length &&
          posts?.map((post) => (
            <li key={post?.filePath}>
              <Link
                as={`/books/${post?.filePath.replace(/\.mdx?$/, '')}`}
                href={`/books/[slug]`}
              >
                <a>{post?.data.title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  )
}

export function getStaticProps() {
  const data = mdxFileList(BOOKS_PATH).map((filePath) => {
    const source = fs.readFileSync(path.join(BOOKS_PATH, filePath))
    const {content, data} = matter(source)

    return {
      content,
      data,
      filePath
    }
  })

  // Sort posts by date, desc.
  const posts = data.sort((post1, post2) => {
    return post1.data.date > post2.data.date ? '-1' : '1'
  })

  return {props: {posts}}
}
