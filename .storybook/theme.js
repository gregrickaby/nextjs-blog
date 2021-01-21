import {create} from '@storybook/theming/create'
import logo from './logo.png'

/**
 * Configure Storybook theme.
 *
 * @see https://storybook.js.org/docs/react/configure/theming#create-a-theme-quickstart
 */
export default create({
  base: 'light',
  brandTitle: 'Greg Rickaby',
  brandUrl: 'https://gregrickaby.com',
  brandImage: logo
})
