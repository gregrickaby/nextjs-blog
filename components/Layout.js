import config from '@/functions/config'
import PropTypes from 'prop-types'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'

export default function Layout({children, ...props}) {
  return (
    <div className="container text-center py-4 space-y-4">
      <Meta title={props.title} description={props.description} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  description: config.siteDescription,
  title: config.siteName
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  description: PropTypes.string,
  title: PropTypes.string
}
