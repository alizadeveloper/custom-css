import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <form
        action="https://formspree.io/f/mrbgkoyv"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
