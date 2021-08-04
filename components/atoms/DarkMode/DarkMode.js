import useDarkMode from 'use-dark-mode'

/**
 * Render the DarkMode component.
 *
 * Note: Must be client side rendered.
 * Note: This component must be used a dynamic component.
 * Note: Don't use a CSS module. It will create an external CSS file.
 *
 * @author Greg Rickaby
 * @see https://github.com/donavon/use-dark-mode
 * @see https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
 * @return {Element} The DarkMode component.
 */
export default function DarkMode() {
  const darkMode = useDarkMode(true, {
    element: document.documentElement,
    classNameDark: 'dark',
    classNameLight: 'light'
  })

  return (
    <div className="flex fixed top-0 right-0 p-4">
      <input
        aria-label="Toggle theme color"
        checked={darkMode.value}
        className="sr-only"
        id="checkbox"
        name="checkbox"
        onChange={darkMode.toggle}
        type="checkbox"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        enableBackground="new 0 0 24 24"
        fill={true === darkMode.value ? '#d3d3d3' : '#1c1b1b'}
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
      >
        <rect fill="none" height="24" width="24" />
        <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
      </svg>
    </div>
  )
}
