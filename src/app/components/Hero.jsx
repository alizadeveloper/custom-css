import styles from './Hero.module.css';
import Image from 'next/image';  // Import Next.js Image component

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        {/* Use Next.js Image component instead of <img> */}
        <Image
          src="/my-image2.jpg"
          alt="Aliza Naeem"
          className={styles.heroImage}
          width={500}  // Specify width for optimization
          height={500} // Specify height for optimization
        />
      </div>

      <div className={styles.heroContent}>
        {/* Corrected escape of single quote */}
        <h1 className={styles.heroTitle}>Hi, I&apos;m Aliza Naeem</h1>
        <p className={styles.heroSubtitle}>Frontend Developer</p>
        <p className={styles.heroDescription}>
          I build user-friendly and responsive websites using the latest web technologies. Passionate about making web experiences better!
        </p>
        <button className={styles.heroButton}>Let&apos;s Connect</button>
      </div>
    </section>
  );
}
