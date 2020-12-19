import Link from 'next/link'
import {getPosts} from '@/lib/functions'
import Layout from '@/components/Layout'

export default function BlogPage({posts}) {
  return (
    <Layout>
      <article>
        <ul>
          {posts.map((post) => {
            const {
              attributes: {date, title, slug}
            } = post
            return (
              <li key={post.attributes.slug}>
                <Link href={`/blog/${slug}`}>
                  <a>
                    <div>
                      <h3>{title}</h3>
                      <h5>{date}</h5>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getPosts()

  return {
    props: {
      posts
    }
  }
}
