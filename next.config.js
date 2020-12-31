module.exports = {
  webpack(config) {
    config.node = {fs: 'empty'} // Fixes NPM packages that depend on the `fs` module.
    return config
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true
      }
    ]
  }
}
