import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  { href: "/", label: "main" }, 
];

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        Cellardoor
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
