const redirects = require('./functions/redirects')

module.exports = {
  future: {
    webpack5: true
  },
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
