import cn from 'classnames'
import {useEffect, useState} from 'react'
import useDarkMode from 'use-dark-mode'

/**
 * This component requires access to the browser, and **must be** used without SSR!
 *
 * @see https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
 */
export default function DisplayOptions() {
  const [fontFamily, setFontFamily] = useState('font-serif')
  const [fontSelector, toggleFontSelector] = useState(false)
  const darkMode = useDarkMode(false, {
    element: document.documentElement,
    classNameDark: 'dark',
    classNameLight: 'light'
  })

  /**
   * Clear font class on <body>.
   */
  function clearFonts() {
    document.documentElement.classList.remove(
      'font-serif',
      'font-sans',
      'font-mono',
      'font-comic',
      'font-dyslexic'
    )
  }

  /**
   * Toggle the display option drawer.
   *
   * @param {object} event
   */
  function toggleDisplayOptions(event) {
    event.preventDefault()
    toggleFontSelector((prev) => !prev)
  }

  /**
   * Font change handler.
   *
   * @param {object} event
   */
  function changeFont(event) {
    event.preventDefault()
    clearFonts()
    setFontFamily(event.target.value)
    document.documentElement.classList.add(event.target.value)
    localStorage.setItem('font', event.target.value)
    toggleFontSelector(false)
  }

  /**
   * Maybe set the font on load?
   */
  function setFontOnLoad() {
    const font = localStorage.getItem('font')
    const validateFont = !!font && font.length > 0 ? font : ''
    if (validateFont) {
      setFontFamily(validateFont)
      clearFonts()
      document.documentElement.classList.add(validateFont)
    }
  }

  useEffect(() => {
    setFontOnLoad()
  })

  return (
    <div
      className={cn('flex items-center fixed top-0 right-0 p-2', {
        'dark:bg-gray-900 bg-white': fontSelector
      })}
    >
      <form onSubmit={toggleDisplayOptions}>
        <label htmlFor="display" className="sr-only">
          toggle display options
        </label>
        <button
          id="display"
          className="bg-transparent px-2 border-none dark:text-white"
        >
          {fontSelector ? 'X' : 'Aa'}
        </button>
      </form>

      {fontSelector && (
        <div className="flex flex-col ml-2">
          Select a font:
          <select
            id="fontSelect"
            className="p-2 mb-4 dark:text-gray-900"
            value={fontFamily}
            onChange={changeFont}
          >
            <option value="font-serif">serif</option>
            <option value="font-sans">sans-serif</option>
            <option value="font-mono">monospace</option>
            <option value="font-comic">comic sans</option>
            <option value="font-dyslexic">open dyslexic</option>
          </select>
          <div>
            <label htmlFor="checkbox">
              <input
                aria-label="Toggle theme color"
                checked={darkMode.value}
                className="mr-1"
                id="checkbox"
                name="checkbox"
                onChange={darkMode.toggle}
                type="checkbox"
              />
              Dark mode
            </label>
          </div>
        </div>
      )}
    </div>
  )
}
