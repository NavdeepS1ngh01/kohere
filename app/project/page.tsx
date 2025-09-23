import Navbar from "@/components/Navbar";
import styles from './style.module.css';
import Footer from "@/components/Footer";

export default function Project() {
  return (
    <>
      <Navbar />
      <div className={styles.pageWrapper}>
        <div className={`patrick-hand-regular ${styles.projectContainer}`}>
          <p>Be our first client — click the contact button and get in touch!</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
