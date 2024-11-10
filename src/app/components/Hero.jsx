// Hero.jsx
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        <img src="/my-image2.jpg" alt="Aliza Naeem" className={styles.heroImage} />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Hi, I'm Aliza Naeem</h1>
        <p className={styles.heroSubtitle}>Frontend Developer</p>
        <p className={styles.heroDescription}>
          I build user-friendly and responsive websites using the latest web technologies. Passionate about making web experiences better!
        </p>
        <button className={styles.heroButton}>Let's Connect</button>
      </div>
    </section>
  );
}
