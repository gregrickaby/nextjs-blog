const redirects = require('./functions/redirects')

module.exports = {
  async redirects() {
    return redirects
  },
  async rewrites() {
    return [
      {source: '/slides', destination: '/slides/index.html'},
      {source: '/meals', destination: '/meals/index.html'}
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}
