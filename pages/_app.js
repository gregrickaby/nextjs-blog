import config from '@/functions/config'
import '@/styles/fonts.css'
import '@/styles/tailwind.css'
import '@/styles/prism.css'
import '@/styles/global.css'
import {DefaultSeo} from 'next-seo'
import PropTypes from 'prop-types'

/**
 * Render the App component.
 *
 * @author Greg Rickaby
 * @param {object} props           The component attributes as props.
 * @param {object} props.Component Default component provider.
 * @param {object} props.pageProps All page props.
 * @return {Element}               The App component.
 */
export default function App({Component, pageProps}) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: config?.siteUrl,
          site_name: `${config?.siteName} - ${config?.siteDescription}`
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
