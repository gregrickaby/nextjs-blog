import {formium} from '@/api/formium/connector'
import ContactForm from '@/components/molecules/ContactForm/ContactForm'
import PageHeader from '@/components/molecules/PageHeader/PageHeader'
import Layout from '@/components/templates/Layout/Layout'
import config from '@/functions/config'
import {PAGES_PATH} from '@/functions/getMdx'
import {getPostData} from '@/functions/getPosts'
import hydrate from 'next-mdx-remote/hydrate'
import PropTypes from 'prop-types'

/**
 * Pass components into MDX files.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote#conditional-custom-components
 */
const components = {}

/**
 * Render the ContactPage component.
 *
 * @author Greg Rickaby
 * @param {object} props             The component attributes as props.
 * @param {object} props.form        The Formium form data.
 * @param {object} props.frontMatter The page meta data.
 * @param {object} props.source      The page content.
 * @return {Element}                 The ContactPage component.
 */
export default function ContactPage({form, frontMatter, source}) {
  const content = hydrate(source, {components})
  return (
    <Layout
      title={`${config?.siteName} - ${config?.siteDescription}`}
      description="Greg is a husband, father, published author, technical editor, and open-source contributor who's been developing websites since the late 90's."
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
      <PageHeader title="Contact" excerpt="Let's Chat" />
      <article>
        {content}
        <ContactForm form={form} />
      </article>
    </Layout>
  )
}

ContactPage.propTypes = {
  form: PropTypes.object,
  frontMatter: PropTypes.object.isRequired,
  source: PropTypes.object.isRequired
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @return {object} All page props.
 */
export async function getStaticProps() {
  const post = await getPostData(PAGES_PATH, 'contact', components)
  const form = await formium.getFormBySlug('contact')

  return {
    props: {
      source: post?.mdx,
      frontMatter: post?.data,
      form
    }
  }
}
