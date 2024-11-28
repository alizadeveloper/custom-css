import React from 'react';
import styles from './Skills.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'; // Importing icons
import { SiNextdotjs } from 'react-icons/si';

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <h2>My Skills</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skill}>
          <FaHtml5 size={40} color="#e34c26" />
          <span>HTML</span>
        </div>
        <div className={styles.skill}>
          <FaCss3Alt size={40} color="#2965f1" />
          <span>CSS</span>
        </div>
        <div className={styles.skill}>
          <FaJs size={40} color="#f7df1e" />
          <span>JavaScript</span>
        </div>
        <div className={styles.skill}>
          <FaReact size={40} color="#61dafb" />
          <span>React</span>
        </div>
        <div className={styles.skill}>
          <SiNextdotjs size={40} color="black" />
          <span>Next.js</span>
        </div>
        <div className={styles.skill}>
          <FaNodeJs size={40} color="#68a063" />
          <span>Node.js</span>
        </div>
      </div>
    </section>
  );
}
