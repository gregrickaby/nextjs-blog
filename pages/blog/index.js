import Layout from '@/components/Layout'
import {POSTS_PATH} from '@/functions/getMdx'
import {getPosts} from '@/functions/getPosts'
import Link from 'next/link'

export default function BlogArchive({posts}) {
  return (
    <Layout>
      <div className="pb-4">
        <h1>Blog</h1>
        <p>My latest posts...</p>
      </div>
      <ul>
        {posts?.length &&
          posts?.map((post) => (
            <li key={post?.filePath}>
              <Link
                as={`/blog/${post?.filePath.replace(/\.mdx?$/, '')}`}
                href={`/blog/[slug]`}
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
  const posts = getPosts(POSTS_PATH)

  return {
    props: {
      posts
    }
  }
}
