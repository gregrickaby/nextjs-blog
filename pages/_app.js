import '@/styles/prism.css'
import '@/styles/tailwind.css'
import config from '@/functions/config'
import {DefaultSeo} from 'next-seo'
import PropTypes from 'prop-types'

export default function App({Component, pageProps}) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: config?.siteUrl,
          site_name: config?.siteName
        }}
        twitter={{
          handle: `${config?.socialNetworks[1]?.handle}`,
          site: `${config?.socialNetworks[1]?.handle}`,
          cardType: 'summary_large_image'
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
