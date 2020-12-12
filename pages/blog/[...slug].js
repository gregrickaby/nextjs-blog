import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import Layout from '@/components/layout'
import {getSinglePostMeta, getAllPostsDesc, getHtml} from '@/lib/functions'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import {SITE_TITLE} from '@/lib/constants'

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
                  {post.title} | {SITE_TITLE}
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

export async function getStaticProps({params}) {
  // Create a blog post based on a slug.
  const post = getSinglePostMeta(params.slug, [
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

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  // Get all blog posts based on their slug.
  const posts = getAllPostsDesc(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: [post.slug]
        }
      }
    }),
    fallback: 'blocking'
  }
}
