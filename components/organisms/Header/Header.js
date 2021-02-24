import HeaderNavigation from '@/components/molecules/HeaderNavigation/HeaderNavigation'
import Logo from '@/components/molecules/Logo/Logo'
import styles from './Header.module.css'

/**
 * Render Header component.
 *
 * @author Greg Rickaby
 * @return {Element} The Header component.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderNavigation />
    </header>
  )
}
