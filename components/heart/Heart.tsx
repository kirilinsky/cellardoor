import styles from "./Heart.module.css";

export function Heart() {
  return (
    <div className={styles.heart} aria-hidden="true">
      <img className={styles.image} src="/heart.png" alt="" />
      <div className={styles.trace} />
      <div className={styles.progressLine} />
    </div>
  );
}
