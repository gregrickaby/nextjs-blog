import cn from 'classnames'
import useDarkMode from 'use-dark-mode'

/**
 * Render the DisplayOptions component.
 *
 * Note: this must be used a dynamic component.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
 * @return {Element} The DisplayOptions component.
 */
export default function DisplayOptions() {
  const darkMode = useDarkMode(true, {
    element: document.documentElement,
    classNameDark: 'dark',
    classNameLight: 'light'
  })

  /**
   * Toggle the display option drawer.
   *
   * @param {object} event The click event.
   */
  function toggleDisplayOptions(event) {
    event.preventDefault()
  }

  return (
    <aside
      className={cn('flex fixed top-0 right-0 p-2', 'dark:bg-black bg-white')}
    >
      <div>
        <label htmlFor="checkbox">
          <input
            aria-label="Toggle theme color"
            checked={darkMode.value}
            className="sr-only"
            id="checkbox"
            name="checkbox"
            onChange={darkMode.toggle}
            type="checkbox"
          />
          <span className="material-icons cursor-pointer">
            nightlight_round
          </span>
        </label>
      </div>
      <form onSubmit={toggleDisplayOptions}>
        <label htmlFor="display" className="sr-only">
          toggle display options
        </label>
      </form>
    </aside>
  )
}
