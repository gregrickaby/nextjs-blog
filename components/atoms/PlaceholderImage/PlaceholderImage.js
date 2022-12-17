import PropTypes from 'prop-types'

/**
 * A placeholder image for the <Image /> component.
 *
 * @author Greg Rickaby
 * @link https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.js
 * @param {number} width  The width of the placeholder.
 * @param {number} height The height of the placeholder.
 * @returns {Element}     A base64 encoded placeholder image element.
 */
export default function PlaceholderImage(width, height) {
  const placeholder = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#808080" offset="20%" />
          <stop stop-color="#525252" offset="50%" />
          <stop stop-color="#808080" offset="80%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#808080" />
      <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
    </svg>`

  return typeof window === 'undefined'
    ? Buffer.from(placeholder).toString('base64')
    : window.btoa(placeholder)
}

PlaceholderImage.defaultProps = {
  width: 800,
  height: 640
}

PlaceholderImage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}
