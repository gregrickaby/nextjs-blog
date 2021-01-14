import {create} from '@storybook/theming/create'
import logo from './logo.png'

/**
 * Configure Storybook theme.
 */
export default create({
  base: 'light',
  brandTitle: 'Greg Rickaby',
  brandUrl: 'https://gregrickaby.com',
  brandImage: logo
})
