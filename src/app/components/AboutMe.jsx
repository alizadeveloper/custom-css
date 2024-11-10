// components/AboutMe.jsx
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <h2 className={styles.aboutMeTitle}>About Me</h2>
      <p className={styles.aboutMeDescription}>
        {/* I am a web developer passionate about building user-friendly applications.
        My skillset includes HTML, CSS, JavaScript, React, and Next.js. */}
        I am Aliza Naeem, a Frontend Web Developer passionate about creating exceptional digital experiences. 
              Specializing in React and Next.js, I build dynamic and responsive applications that prioritize user-centered design.
  
              I also focus on SEO best practices to enhance visibility and ensure my projects meet both technical and user needs.
  
              When I'm not coding, I enjoy exploring new technologies and engaging with the developer community. 
              Let's connect and create something amazing together
      </p>
    </section>
  );
}
