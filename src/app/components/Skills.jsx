// components/Skills.jsx
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <h2>My Skills</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skill}>HTML</div>
        <div className={styles.skill}>CSS</div>
        <div className={styles.skill}>JavaScript</div>
        <div className={styles.skill}>React</div>
        <div className={styles.skill}>Next.js</div>
        <div className={styles.skill}>Node.js</div>
      </div>
    </section>
  );
}
