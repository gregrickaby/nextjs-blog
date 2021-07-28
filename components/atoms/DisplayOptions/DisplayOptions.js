import useDarkMode from 'use-dark-mode'
import styles from './DisplayOptions.module.css'

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

  return (
    <div className={styles.displayOptions}>
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
        <span className="material-icons cursor-pointer">nightlight_round</span>
      </label>
    </div>
  )
}
