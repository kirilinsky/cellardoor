import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.desktopHeader}>
        <Link className={styles.logo} href="/" aria-label="CellarDoor home">
          CellarDoor
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link className={styles.navLink} key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.mobileHeader}>
        <details className={styles.mobileMenu}>
          <summary className={styles.menuButton} aria-label="Open navigation">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </summary>

          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link className={styles.mobileNavLink} key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>

        <Link className={styles.mobileLogo} href="/" aria-label="CellarDoor home">
          CellarDoor
        </Link>
      </div>
    </header>
  );
}
