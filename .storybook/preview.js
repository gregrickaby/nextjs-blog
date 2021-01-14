import {withNextRouter} from 'storybook-addon-next-router'
import {addDecorator} from '@storybook/react'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import '@/styles/fonts.css'
import '@/styles/tailwind.css'
import '@/styles/prism.css'
import '@/styles/global.css'

/**
 * Enable Next.js <Link /> component usage.
 */
addDecorator(
  withNextRouter({
    path: '/'
  })
)

/**
 * Custom viewports based on popular Apple devices.
 */
const customViewports = {
  largeMobile: {
    name: 'iPhone X/11/12 Pro',
    styles: {
      width: '428px',
      height: '926px'
    },
    type: 'mobile'
  },
  smallLaptop: {
    name: 'MacBook Air 13"',
    styles: {
      width: '1280px',
      height: '800px'
    },
    type: 'desktop'
  },
  largeLaptop: {
    name: 'MacBook Pro 16"',
    styles: {
      width: '1536px',
      height: '960px'
    }
  },
  destkop: {
    name: 'iMac 5k',
    styles: {
      width: '2048px',
      height: '1152px'
    },
    type: 'desktop'
  }
}

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS
    }
  }
}
