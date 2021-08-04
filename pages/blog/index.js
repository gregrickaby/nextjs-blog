import Card from '@/components/molecules/Card/Card'
import PageHeader from '@/components/molecules/PageHeader/PageHeader'
import Layout from '@/components/templates/Layout/Layout'
import config from '@/lib/config'
import {POSTS_PATH} from '@/lib/helpers'
import {getAllPosts} from '@/lib/posts'
import {generateRssFeed} from '@/scripts/generate-rss'
import PropTypes from 'prop-types'

/**
 * Render the BlogArchive component.
 *
 * @author Greg Rickaby
 * @param {object} props       The component attributes as props.
 * @param {any}    props.posts The post data.
 * @return {Element} The BlogArchive component.
 */
export default function BlogArchive({posts}) {
  return (
    <Layout
      title={`Articles - ${config?.siteName}`}
      description="The latest posts on code, projects, and personal stuff."
    >
      <PageHeader title="Articles" />
      <div className="grid gap-12">
        {!!posts?.length &&
          posts.map((post, index) => (
            <Card key={index} {...post} path="blog" />
          ))}
      </div>
    </Layout>
  )
}

BlogArchive.propTypes = {
  posts: PropTypes.any.isRequired
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @return {object} All post props.
 */
export async function getStaticProps() {
  const posts = getAllPosts(POSTS_PATH)
  await generateRssFeed()

  return {
    props: {
      posts
    }
  }
}
