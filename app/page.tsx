import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Cellardoor</p>
        <h1>h1</h1>
        <p>default</p>
      </div>
    </section>
  );
}
