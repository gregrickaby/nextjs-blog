import React from 'react'
import PropTypes from 'prop-types'

/**
 * Render the Excerpt component.
 *
 * @author Greg Rickaby
 * @param {object} props         The component attributes as props.
 * @param {string} props.excerpt The component description.
 * @return {Element}             The Excerpt component.
 */
export default function Excerpt(props) {
  if (!props?.excerpt) {
    return false
  }
  return (
    <p
      className="font-roboto text-gray-500 dark:text-gray-100"
      dangerouslySetInnerHTML={{__html: props?.excerpt}}
    />
  )
}

Excerpt.propTypes = {
  excerpt: PropTypes.string
}
