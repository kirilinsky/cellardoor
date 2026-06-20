import Link from "next/link";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
};

export function Button({ children, href, icon, variant = "primary" }: ButtonProps) {
  return (
    <Link className={`${styles.button} ${styles[variant]}`} href={href}>
      <span>{children}</span>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
    </Link>
  );
}
