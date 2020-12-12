import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import Layout from '@/components/layout'
import {
  getSinglePost,
  getPosts,
  getHtml,
  getPath,
  createSlug
} from '@/lib/functions'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import {siteTitle} from '@/lib/config'

export default function Post({post, preview}) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | {siteTitle}
                </title>
                <meta property="og:image" content={post?.ogImage?.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                category={post.category}
                tags={post.tags}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Get all blog posts.
  const posts = await getPosts()

  // Get the paths we want to pre-render based on posts.
  const paths = posts.map((post) => {
    return {
      params: {
        slug: [createSlug(post.path)]
      }
    }
  })

  // We'll pre-render only these paths at build time.
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  // Convert browser slug into real paths.
  const fullPath = getPath(params.slug, true)
  const path = getPath(params.slug)

  // Get the blog post.
  const post = getSinglePost(fullPath, path, [
    'title',
    'date',
    'slug',
    'category',
    'tags',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ])

  // Convert markdown to HTML.
  const content = await getHtml(post.content || '')

  // Pass blog post in as props.
  return {
    props: {
      post: {
        ...post,
        content
      }
    },
    revalidate: 60
  }
}
