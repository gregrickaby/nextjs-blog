const redirects = require('./lib/redirects')

module.exports = {
  swcMinify: true,
  async redirects() {
    return redirects
  },
  async rewrites() {
    return [
      {source: '/slides', destination: '/slides/index.html'},
      {source: '/meals', destination: '/meals/index.html'}
    ]
  }
}
