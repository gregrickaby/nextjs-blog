import '@/styles/index.css'
import '@/styles/prism.css'
import PropTypes from 'prop-types'

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
