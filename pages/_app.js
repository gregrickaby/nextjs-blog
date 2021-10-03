import config from '@/lib/config'
import '@/styles/prism.css'
import '@/styles/styles.css'
import {DefaultSeo} from 'next-seo'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import PropTypes from 'prop-types'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
          site_name: `${config?.siteName} - ${config?.siteDescription}`,
          images: [
            {
              url: `${config?.siteUrl}${config?.ogImage}`
            }
          ]
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
