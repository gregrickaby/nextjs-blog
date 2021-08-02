import ContactForm from '@/components/molecules/ContactForm/ContactForm'
import PageHeader from '@/components/molecules/PageHeader/PageHeader'
import Layout from '@/components/templates/Layout/Layout'
import config from '@/functions/config'
import {formium} from '@/lib/formium/connector'
import PropTypes from 'prop-types'

/**
 * Render the ContactPage component.
 *
 * @author Greg Rickaby
 * @param {object} props      The component attributes as props.
 * @param {object} props.form The Formium form data.
 * @return {Element} The ContactPage component.
 */
export default function ContactPage({form}) {
  return (
    <Layout
      title={`Contact - ${config?.siteName}`}
      description="Find out how to get in touch. Give me a couple of days to respond."
      openGraph={{
        title: `Contact - ${config?.siteName}`,
        description:
          'Find out how to get in touch. Give me a couple of days to respond.'
      }}
    >
      <PageHeader title="Contact" />
      <article>
        <p>
          Feel free to reach out via the form below. You could also send me a
          message on <a href="https://twitter.com/gregrickaby">Twitter</a> or{' '}
          <a href="https://www.linkedin.com/in/gregrickaby">LinkedIn</a>.
        </p>
        <ContactForm form={form} />
      </article>
    </Layout>
  )
}

ContactPage.propTypes = {
  form: PropTypes.object
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @return {object} All page props.
 */
export async function getStaticProps() {
  const form = await formium.getFormBySlug('contact')

  return {
    props: {
      form
    }
  }
}
