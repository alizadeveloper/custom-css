'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.logoText}>
            <span className={styles.letterA}>A</span>liza
          </span>
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Display FaTimes if menu is open */}
      </div>

      {/* Navbar Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li><Link href="#hero">Home</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>

      {/* Social Media Icons */}
      <div className={styles.socialIcons}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub className={`${styles.icon} ${styles.githubIcon}`} />
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={`${styles.icon} ${styles.linkedinIcon}`} />
        </a>
        <a href="mailto:yourname@example.com">
          <FaEnvelope className={`${styles.icon} ${styles.emailIcon}`} />
        </a>
      </div>
    </nav>
  );
}
