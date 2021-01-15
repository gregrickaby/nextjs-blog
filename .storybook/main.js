const path = require('path')

/**
 * Configure Storybook.
 *
 * @see https://storybook.js.org/docs/react/configure/overview
 */
module.exports = {
  reactOptions: {
    fastRefresh: true,
    strictMode: true
  },
  stories: ['../components/**/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset'
  ],
  webpackFinal: async (config) => {
    /**
     * Enable @ symbol aliases located in jsconfig.json
     */
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../')
    }

    return config
  }
}
