import cn from 'classnames'
import {useEffect, useState} from 'react'
import useDarkMode from 'use-dark-mode'

export default function DisplayOptions() {
  const [fontFamily, setFontFamily] = useState('font-serif')
  const [fontSelector, toggleFontSelector] = useState(false)
  const darkMode = useDarkMode(true, {
    classNameDark: 'dark',
    classNameLight: 'light'
  })

  /**
   * Clear font class on <body>.
   */
  function clearFonts() {
    document.body.classList.remove(
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
    document.body.classList.add(event.target.value)
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
      document.body.classList.add(validateFont)
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
        <button id="display" className="bg-transparent px-2">
          {fontSelector ? 'X' : 'Aa'}
        </button>
      </form>

      {fontSelector && (
        <div className="flex flex-col ml-2">
          <select
            id="fontSelect"
            className="p-2 dark:text-gray-900"
            value={fontFamily}
            onChange={changeFont}
          >
            <option value="font-serif">serif</option>
            <option value="font-sans">sans-serif</option>
            <option value="font-mono">monospace</option>
            <option value="font-comic">comic sans</option>
            <option value="font-dyslexic">open dyslexic</option>
          </select>
          <div className="">
            <label htmlFor="checkbox">
              <input
                aria-label="Toggle theme color"
                checked={darkMode.value}
                id="checkbox"
                name="checkbox"
                onChange={darkMode.toggle}
                type="checkbox"
              />
              Toggle theme color
            </label>
          </div>
        </div>
      )}
    </div>
  )
}
