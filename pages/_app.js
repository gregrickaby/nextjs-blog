import config from '@/lib/config'
import * as gtag from '@/lib/gtag'
import '@/styles/prism.css'
import '@/styles/styles.css'
import {DefaultSeo} from 'next-seo'
import Router, {useRouter} from 'next/router'
import Script from 'next/script'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import PropTypes from 'prop-types'
import {useEffect} from 'react'

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
  const router = useRouter()
  useEffect(() => {
    function handleRouteChange(url) {
      return gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
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
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}');
          `
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
