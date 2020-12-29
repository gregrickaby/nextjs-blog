import config from '@/functions/config'
import PropTypes from 'prop-types'
import Meta from './Meta'

export default function Layout({children, ...props}) {
  return (
    <>
      <Meta title={props.title} description={props.description} />
      <main className="container m-auto">{children}</main>
    </>
  )
}

Layout.defaultProps = {
  description: config.siteDescription,
  title: config.siteTitle
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  description: PropTypes.string,
  title: PropTypes.string
}
