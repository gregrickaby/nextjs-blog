import cn from 'classnames'
import {useEffect, useState} from 'react'
import useDarkMode from 'use-dark-mode'

/**
 * This component requires access to the browser, and **must be** used without SSR!
 *
 * @see https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
 */
export default function DisplayOptions() {
  const [fontFamily, setFontFamily] = useState('font-robotoslab')
  const [fontSelector, toggleFontSelector] = useState(false)
  const darkMode = useDarkMode(true, {
    element: document.documentElement,
    classNameDark: 'dark',
    classNameLight: 'light'
  })

  /**
   * Clear font class on <body>.
   */
  function clearFonts() {
    document.documentElement.classList.remove(
      'font-comicneue',
      'font-dancingscript',
      'font-opendyslexic',
      'font-roboto',
      'font-robotomono',
      'font-robotoslab'
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
  }, [])

  return (
    <aside
      className={cn('flex fixed top-0 right-0 p-2', {
        'dark:bg-gray-900 bg-white': fontSelector
      })}
    >
      {fontSelector && (
        <div className="p-6 -mr-6 space-y-4 text-left">
          <div className="flex flex-col">
            <span className="mb-1">Select font style:</span>
            <select
              id="fontSelect"
              className="py-2 -ml-1 dark:text-gray-900 border"
              value={fontFamily}
              onChange={changeFont}
            >
              <option value="font-comicneue">Comic Sans</option>
              <option value="font-dancingscript">Cursive</option>
              <option value="font-opendyslexic">Open Dyslexic</option>
              <option value="font-robotomono">Monospace</option>
              <option value="font-roboto">Sans-serif</option>
              <option value="font-robotoslab">Serif (default)</option>
            </select>
          </div>
          <div>
            <label htmlFor="checkbox">
              <input
                aria-label="Toggle theme color"
                checked={darkMode.value}
                className="mr-2 align-middle"
                id="checkbox"
                name="checkbox"
                onChange={darkMode.toggle}
                type="checkbox"
              />
              <span className="align-middle">Dark mode</span>
            </label>
          </div>
        </div>
      )}

      <form onSubmit={toggleDisplayOptions}>
        <label htmlFor="display" className="sr-only">
          toggle display options
        </label>
        <button id="display" className="px-2 border-none dark:text-white">
          {fontSelector ? 'X' : 'Aa'}
        </button>
      </form>
    </aside>
  )
}
