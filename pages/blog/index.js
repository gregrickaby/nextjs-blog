import ArchiveHeader from '@/components/ArchiveHeader'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import config from '@/functions/config'
import {POSTS_PATH} from '@/functions/getMdx'
import {getAllPosts} from '@/functions/getPosts'

export default function BlogArchive({posts}) {
  return (
    <Layout title={`Blog - ${config?.siteName}`} description="My latest posts.">
      <ArchiveHeader title="Blog" description="My latest posts." />
      <div className="grid gap-12 md:grid-cols-2">
        {posts?.length &&
          posts?.map((post, index) => (
            <Card key={index} props={post} path="blog" />
          ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts(POSTS_PATH)

  return {
    props: {
      posts
    }
  }
}
