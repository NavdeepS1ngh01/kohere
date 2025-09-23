'use client';

import styles from './style.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <section className={styles.introSection}>
          <h1 className={styles.heading}>Meet the Koherent Team</h1>
          <p className={styles.subheading}>We take pride in delivering</p>
          <p className={styles.highlight}>Exceptional results</p>
          <p className={styles.description}>
            Kohere Limited is a technology consultancy based in Hong Kong, dedicated to building digital solutions that drive growth and innovation.
          </p>
          <button className={styles.ctaButton}>Join Our Team</button>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.teamCard}>
            <img src="/navdeep.jpg" alt="Navdeep Singh" className={styles.avatar} />
            <p className={styles.name}>Navdeep Singh</p>
            <p className={styles.role}>Founder</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/rajpreet.jpg" alt="Rajpreet Singh" className={styles.avatar} />
            <p className={styles.name}>Rajpreet Singh</p>
            <p className={styles.role}>Founder</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
