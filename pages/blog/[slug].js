import Separator from '@/components/atoms/Separator/Separator'
import Article from '@/components/molecules/Article/Article'
import SideNote from '@/components/molecules/SideNote/SideNote'
import Layout from '@/components/templates/Layout/Layout'
import config from '@/lib/config'
import {POSTS_PATH} from '@/lib/helpers'
import {getPostData, getPostsPath} from '@/lib/posts'
import dayjs from 'dayjs'
import {MDXRemote} from 'next-mdx-remote'
import Head from 'next/head'
import Image from 'next/image'
import PropTypes from 'prop-types'

/**
 * Pass components into MDX files.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote#conditional-custom-components
 */
const components = {
  Image,
  Separator,
  SideNote
}

/**
 * Render the BlogPost component.
 *
 * @author Greg Rickaby
 * @param {object} props             The component attributes as props.
 * @param {object} props.source      The post content.
 * @param {object} props.frontMatter The post meta data.
 * @return {Element}                 The BlogPost component.
 */
export default function BlogPost({source, frontMatter}) {
  const openGraphImage = frontMatter?.ogImage
    ? `${config?.siteUrl}${frontMatter?.ogImage}`
    : `${config?.siteUrl}${config?.ogImage}`

  return (
    <Layout
      title={`${frontMatter.title} - ${config?.siteName}`}
      description={frontMatter?.excerpt}
      openGraph={{
        title: `${frontMatter.title} - ${config?.siteName}`,
        description: frontMatter?.excerpt,
        url: `${config?.siteUrl}/blog/${frontMatter?.slug}`,
        type: 'article',
        article: {
          publishedTime: dayjs(frontMatter?.date).toISOString()
        },
        images: [
          {
            url: openGraphImage
          }
        ]
      }}
    >
      <Head>
        <script type="application/ld+json">
          {`{
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${`${config?.siteUrl}/blog/${frontMatter?.slug}`}"
              },
              "headline": "${frontMatter?.title}",
              "image": [
                "${openGraphImage}"
              ],
              "datePublished": "${dayjs(frontMatter?.date).toISOString()}",
              "dateModified": "${dayjs(frontMatter?.date).toISOString()}",
              "author": {
                "@type": "Person",
                "name": "Greg Rickaby",
                "url": "https://gregrickaby.com"
              },
              "description": "${frontMatter?.excerpt}"
            }`}
        </script>
      </Head>
      <Article {...frontMatter}>
        <MDXRemote {...source} components={components} />
      </Article>
    </Layout>
  )
}

BlogPost.propTypes = {
  frontMatter: PropTypes.object.isRequired,
  source: PropTypes.object.isRequired
}

/**
 * Get static paths.
 *
 * @author Greg Rickaby
 * @return {object} All post paths.
 */
export async function getStaticPaths() {
  const paths = getPostsPath(POSTS_PATH)

  return {
    paths,
    fallback: false
  }
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @param {object} context        Incoming context.
 * @param {object} context.params The route parameters.
 * @return {object}               All post props.
 */
export async function getStaticProps({params}) {
  const post = await getPostData(POSTS_PATH, params.slug, components)

  return {
    props: {
      source: post?.mdx,
      frontMatter: post?.data
    }
  }
}
