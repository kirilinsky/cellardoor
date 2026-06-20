import { Heart } from "@/components/heart/Heart";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title} id="hero-title">
            <span>Living</span>
            <span>Archive</span>
          </h1>
          <p className={styles.description}>
            An archive and showcase for dev projects.
          </p>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <Heart />
        </div>
      </div>
    </section>
  );
}
