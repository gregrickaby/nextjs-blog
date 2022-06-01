import Card from '@/components/molecules/Card/Card'
import PageHeader from '@/components/molecules/PageHeader/PageHeader'
import Layout from '@/components/templates/Layout/Layout'
import config from '@/lib/config'
import {POSTS_PATH} from '@/lib/helpers'
import {getAllPosts} from '@/lib/posts'
import {generateRssFeed} from '@/scripts/generate-rss'
import PropTypes from 'prop-types'
import {useState} from 'react'

/**
 * Render the BlogArchive component.
 *
 * @author Greg Rickaby
 * @param {object} props       The component attributes as props.
 * @param {any}    props.posts The post data.
 * @return {Element} The BlogArchive component.
 */
export default function BlogArchive({posts}) {
  const [query, setQuery] = useState('')

  // Filter the posts by the query value.
  const searchResults = posts.filter((post) =>
    post?.data?.title?.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Layout
      title={`Articles - ${config?.siteName}`}
      description="The latest articles on web development, photography, projects, and personal stuff."
    >
      <PageHeader title="Articles" />
      <div className="grid gap-8">
        <input
          aria-label="Search all articles"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search all articles"
          className="rounded-sm bg-gray-100 py-3 px-4 dark:bg-gray-700 dark:text-white"
        />

        {
          /* On initial page load, render all blog posts. */
          !query && !!posts?.length && (
            <>
              {posts.map((post, index) => (
                <Card key={index} {...post} path="article" />
              ))}
            </>
          )
        }

        {
          /* Render the search results. */
          query && !!searchResults?.length && (
            <>
              <h3 className="mb-0">Search Results:</h3>
              {searchResults.map((post, index) => (
                <Card key={index} {...post} path="article" />
              ))}
            </>
          )
        }

        {
          /* No search results? Render a message. */
          !searchResults.length && (
            <p className="font-bold">Bummer. No articles found.</p>
          )
        }
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
