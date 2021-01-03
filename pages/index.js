import Layout from '@/components/Layout'
import config from '@/functions/config'
import {PAGES_PATH} from '@/functions/getMdx'
import {getPostData} from '@/functions/getPosts'
import hydrate from 'next-mdx-remote/hydrate'
import {NextSeo} from 'next-seo'
import Image from 'next/image'

/**
 * Dynamically import components into MDX files.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote#conditional-custom-components
 */
const components = {}

export default function HomePage({source, frontMatter}) {
  const content = hydrate(source, {components})
  return (
    <Layout>
      <NextSeo
        title={`${config?.siteName} - ${config?.siteDescription}`}
        description="Greg is a husband, father, published author, technical editor, and open-source contributor who's been developing websites since the late 90's."
      />
      <div className="cover-image">
        <Image
          alt="Rickaby Family"
          className="rounded"
          height="1149"
          layout="responsive"
          src={frontMatter?.coverImage}
          width="1530"
        />
      </div>
      <article>{content}</article>
    </Layout>
  )
}

export async function getStaticProps() {
  const post = await getPostData(PAGES_PATH, 'homepage', components)

  return {
    props: {
      source: post?.mdx,
      frontMatter: post?.data
    }
  }
}
