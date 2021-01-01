import ArchiveHeader from '@/components/ArchiveHeader'
import Layout from '@/components/Layout'
import config from '@/functions/config'
import {POSTS_PATH} from '@/functions/getMdx'
import {getAllPosts} from '@/functions/getPosts'
import {NextSeo} from 'next-seo'
import Link from 'next/link'

export default function BlogArchive({posts}) {
  return (
    <Layout>
      <NextSeo
        title={`Blog - ${config?.siteName}`}
        description="My latest posts..."
      />
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
  const posts = getAllPosts(POSTS_PATH)

  return {
    props: {
      posts
    }
  }
}
