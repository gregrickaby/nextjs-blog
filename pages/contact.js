import PageHeader from '@/components/molecules/PageHeader/PageHeader'
import Layout from '@/components/templates/Layout/Layout'
import config from '@/lib/config'

/**
 * Render the Contact page.
 *
 * @author Greg Rickaby
 * @return {Element} The ContactPage component.
 */
export default function ContactPage() {
  return (
    <Layout
      title={`Contact - ${config?.siteName}`}
      description="Find out how to get in touch. Please give me a few days to respond."
      openGraph={{
        title: `Contact - ${config?.siteName}`,
        description:
          'Find out how to get in touch. Please give me a few days to respond.'
      }}
    >
      <PageHeader title="Contact" />
      <article>
        <p>
          Send an email to greg@gregrickaby.com or a DM on{' '}
          <a href="https://www.linkedin.com/in/gregrickaby">LinkedIn</a>.
        </p>
      </article>
    </Layout>
  )
}
