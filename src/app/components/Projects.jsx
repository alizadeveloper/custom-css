import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {/* Project 1 - Simple Calculator */}
        <div className={styles.projectCard}>
          <img 
            src="/simple-calculator.png" 
            alt="Simple Calculator" 
            className={styles.projectImage} 
          />
          <div className={styles.projectInfo}>
            <h3>Simple Calculator</h3>
            <p>Responsive and simple calculator built with Typescript.</p>
          </div>
        </div>

        {/* Project 2 - Guessing Game */}
        <div className={styles.projectCard}>
          <img 
            src="/guessing-game.png" 
            alt="Guessing Game" 
            className={styles.projectImage} 
          />
          <div className={styles.projectInfo}>
            <h3>Guessing Game</h3>
            <p>Interactive game where the user has to guess a random number.</p>
          </div>
        </div>

        {/* Project 3 - ATM Machine */}
        <div className={styles.projectCard}>
          <img 
            src="/atm-machine2.png" 
            alt="ATM Machine" 
            className={styles.projectImage} 
          />
          <div className={styles.projectInfo}>
            <h3>ATM Machine</h3>
            <p>A simple ATM machine simulator for learning purposes.</p>
          </div>
        </div>

        {/* Project 4 - Table Generator */}
        <div className={styles.projectCard}>
          <img 
            src="/table-generted.jpg" 
            alt="Table Generator" 
            className={styles.projectImage} 
          />
          <div className={styles.projectInfo}>
            <h3>Table Generator CLI</h3>
            <p>Command-line tool to generate multiplication tables.</p>
          </div>
        </div>

        {/* Project 5 - Pizza Website */}
        <div className={styles.projectCard}>
          <img 
            src="/pizza-website.jpg" 
            alt="Pizza Website" 
            className={styles.projectImage} 
          />
          <div className={styles.projectInfo}>
            <h3>Pizza Website</h3>
            <p>A website for ordering pizza online, built with Nextjs .</p>
          </div>
        </div>

        {/* Project 6 - My Resume */}
        <div className={styles.projectCard}>
          <img 
            src="/my-resume.jpg" 
            alt="My Resume" 
            className={styles.projectImage} 
          />
          <div className={styles.projectInfo}>
            <h3>My Resume</h3>
            <p>A digital version of my resume available for download.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
