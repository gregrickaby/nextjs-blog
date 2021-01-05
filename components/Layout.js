import PropTypes from 'prop-types'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Meta from '@/components/Meta'
import {NextSeo} from 'next-seo'

export default function Layout({children, ...props}) {
  return (
    <>
      <NextSeo
        title={props?.title}
        description={props?.description}
        openGraph={props?.openGraph}
      />
      <Meta />
      <div className="container space-y-12 max-w-2xl mx-auto p-8 md:px-0 py-8">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  openGraph: PropTypes.object,
  title: PropTypes.string.isRequired
}
