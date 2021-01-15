import Meta from '@/components/common/Meta'
import Footer from '@/components/organisms/Footer/Footer'
import Header from '@/components/organisms/Header/Header'
import {NextSeo} from 'next-seo'
import PropTypes from 'prop-types'
import styles from './Layout.module.css'

/**
 * Render the Layout component.
 *
 * @author Greg Rickaby
 * @param {object} props          The component attributes as props.
 * @param {any}    props.children Child component(s) to render.
 * @param {object} props.props    All remaining props.
 * @return {Element}              The Layout component.
 */
export default function Layout({children, ...props}) {
  return (
    <>
      <NextSeo
        title={props?.title}
        description={props?.description}
        openGraph={props?.openGraph}
      />
      <Meta />
      <div className={styles.layout}>
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
