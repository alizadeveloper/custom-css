import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2024 All Rights Reserved | Aliza Naeem</p>
        <div className={styles.socialIcons}>
          {/* Font Awesome icons will appear here */}
          <a href="https://www.linkedin.com/in/aliza-naeem" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> {/* GitHub icon */}
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> {/* Twitter icon */}
          </a>
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> {/* Instagram icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}
