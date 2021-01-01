import ArchiveHeader from '@/components/ArchiveHeader'
import Layout from '@/components/Layout'
import {POSTS_PATH} from '@/functions/getMdx'
import {getPosts} from '@/functions/getPosts'
import Link from 'next/link'

export default function BlogArchive({posts}) {
  return (
    <Layout>
      <ArchiveHeader title="Blog" description="My latest posts..." />
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
