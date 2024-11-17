import styles from './Projects.module.css';
import Image from 'next/image';  // Import the Next.js Image component

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {/* Project 1 - Simple Calculator */}
        <div className={styles.projectCard}>
          <Image
            src="/calculator.png"
            alt="Simple Calculator"
            className={styles.projectImage}
            width={500}
            height={300}
          />
          <div className={styles.projectInfo}>
            <h3>Simple Calculator</h3>
            <p>Responsive and simple calculator built with Typescript.</p>
          </div>
        </div>

        {/* Project 2 - Guessing Game */}
        <div className={styles.projectCard}>
          <Image
            src="/guessing-game.png"
            alt="Guessing Game"
            className={styles.projectImage}
            width={500}
            height={300}
          />
          <div className={styles.projectInfo}>
            <h3>Guessing Game</h3>
            <p>Interactive game where the user has to guess a random number.</p>
          </div>
        </div>

        {/* Project 3 - ATM Machine */}
        <div className={styles.projectCard}>
          <Image 
            src="/atm-machine2.png"
            alt="ATM Machine"
            className={styles.projectImage}
            width={500}
            height={300}
          />
          <div className={styles.projectInfo}>
            <h3>ATM Machine</h3>
            <p>A simple ATM machine simulator for learning purposes.</p>
          </div>
        </div>

        {/* Project 4 - Table Generator */}
        <div className={styles.projectCard}>
          <Image 
            src="/table-generted.jpg"
            alt="Table Generator"
            className={styles.projectImage}
            width={500}
            height={300}
          />
          <div className={styles.projectInfo}>
            <h3>Table Generator CLI</h3>
            <p>Command-line tool to generate multiplication tables.</p>
          </div>
        </div>

        {/* Project 5 - Pizza Website */}
        <div className={styles.projectCard}>
          <Image
            src="/pizza-website.jpg"
            alt="Pizza Website"
            className={styles.projectImage}
            width={500}
            height={300}
          />
          <div className={styles.projectInfo}>
            <h3>Pizza Website</h3>
            <p>A website for ordering pizza online, built with Nextjs.</p>
          </div>
        </div>

        {/* Project 6 - My Resume */}
        <div className={styles.projectCard}>
          <Image 
            src="/my-resume.jpg"
            alt="My Resume"
            className={styles.projectImage}
            width={500}
            height={300}
          />
          <div className={styles.projectInfo}>
            <h3>My Resume</h3>
            <p>A digital version of my resume available for download.</p>
          </div>
        </div>

        {/* Project 7 - E-Commerce Website */}
        <div className={styles.projectCard}>
          <Image 
            src="/fresh-market.jpg"
            alt="Fresh-Market-Store"
            className={styles.projectImage}
            width={500}
            height={300}
          />
          <div className={styles.projectInfo}>
            <h3>Fresh-Market-Store</h3>
            <p>An intuitive and responsive e-commerce store built with Next.js and custom CSS. It offers a seamless shopping experience with real-time product updates, easy navigation, and a modern design.</p>
          </div>
        </div>

        {/* Project 8 - Beauty Store */}
        <div className={styles.projectCard}>
          <Image 
            src="/beauty-store.png"
            alt="Beauty Store"
            className={styles.projectImage}
            width={500}
            height={300}
          />
          <div className={styles.projectInfo}>
            <h3>Beauty Store</h3>
            <p>A sleek and responsive online store built with Next.js and styled using Tailwind CSS. It provides a smooth and user-friendly experience for browsing and purchasing premium beauty products.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
