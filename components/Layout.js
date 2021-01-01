import PropTypes from 'prop-types'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Meta from '@/components/Meta'

export default function Layout({children}) {
  return (
    <>
      <Meta />
      <div className="container space-y-8 max-w-2xl mx-auto p-8 md:px-0 py-8">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired
}
