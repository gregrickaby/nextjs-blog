module.exports = {
  webpack(config) {
    config.node = {fs: 'empty'}
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
