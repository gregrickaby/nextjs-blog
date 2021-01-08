import useDarkMode from 'use-dark-mode'

export default function DarkModeToggle() {
  const darkMode = useDarkMode(false)

  return (
    <div className="dark-mode-toggle-wrap">
      <label className="dark-mode-toggle" htmlFor="checkbox">
        <span className="sr-only">Toggle dark mode</span>
        <input
          aria-label="Toggle dark mode"
          checked={darkMode.value}
          id="checkbox"
          name="checkbox"
          onChange={darkMode.toggle}
          type="checkbox"
        />
        <div className="dark-mode-toggle-slider"></div>
      </label>
      <span className="dark-mode-toggle-icon">☾</span>
    </div>
  )
}
