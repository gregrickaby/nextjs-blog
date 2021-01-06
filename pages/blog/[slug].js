import Article from '@/components/Article'
import Layout from '@/components/Layout'
import config from '@/functions/config'
import {POSTS_PATH} from '@/functions/getMdx'
import {getPostData, getPostsPath, generateRssFeed} from '@/functions/getPosts'
import hydrate from 'next-mdx-remote/hydrate'
import {BlogJsonLd} from 'next-seo'
import dayjs from 'dayjs'

/**
 * Dynamically import components into MDX files.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote#conditional-custom-components
 */
const components = {}

export default function BlogPost({source, frontMatter}) {
  const content = hydrate(source, {components})
  return (
    <Layout
      title={`${frontMatter.title} - ${config?.siteName}`}
      description={frontMatter?.excerpt}
      openGraph={{
        title: `${frontMatter.title} - ${config?.siteName}`,
        description: frontMatter?.excerpt,
        images: [
          {
            url: `${config.siteUrl}${frontMatter?.coverImage}`,
            alt: frontMatter?.title
          }
        ]
      }}
    >
      <BlogJsonLd
        url={`${config?.siteUrl}/${frontMatter?.slug}`}
        title={frontMatter?.title}
        images={[`${config?.siteUrl}${frontMatter?.coverImage}`]}
        datePublished={dayjs(frontMatter?.date).toISOString()}
        authorName={frontMatter?.author?.name}
        description={frontMatter?.excerpt}
      />
      <Article {...frontMatter}>{content}</Article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getPostsPath(POSTS_PATH)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const post = await getPostData(POSTS_PATH, params.slug, components)
  await generateRssFeed()

  return {
    props: {
      source: post?.mdx,
      frontMatter: post?.data
    }
  }
}
