import Head from 'next/head'
import Image from 'next/image'
import {getPosts} from '@/lib/functions'
import Layout from '@/components/Layout'

export default function BlogPost({post}) {
  const {
    attributes: {coverImage, date, title},
    html
  } = post
  return (
    <Layout>
      <article>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/atom-one-dark-reasonable.min.css"
          />
        </Head>
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          layout="responsive"
          width={960}
          height={360}
        />
        <h1 dangerouslySetInnerHTML={{__html: title}} />
        <time>{date}</time>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = getPosts()

  return {
    paths: posts.map((post) => ({params: {slug: post.attributes.slug}})),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const posts = getPosts()

  return {
    props: {
      post: posts.find((post) => post.attributes.slug === params.slug)
    }
  }
}
