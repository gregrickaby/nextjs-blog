const redirects = require('./lib/redirects')

module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
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
