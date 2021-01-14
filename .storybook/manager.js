import {addons} from '@storybook/addons'
import theme from './theme'

/**
 * Configure Storybook addons.
 */
addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: theme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false
})
