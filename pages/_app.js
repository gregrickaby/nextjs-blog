import config from '@/functions/config'
import '@/styles/global.css'
import '@/styles/prism.css'
import '@/styles/tailwind.css'
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
