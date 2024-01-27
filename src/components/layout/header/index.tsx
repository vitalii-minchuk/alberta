import Link from "next/link"
import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>

        <Link href='/'>home</Link>
        <Link href='/img-test'>img</Link>
        <Link href='/select-test'>select</Link>
        </nav>
    </header>
  )
}
