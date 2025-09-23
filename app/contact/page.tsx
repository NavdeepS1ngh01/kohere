"use client";

import Navbar from "@/components/Navbar";
import styles from "./style.module.css";
import { IoChatboxEllipsesOutline, IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className={styles.contactContainer}>
        <div className={styles.contactLeft}>
          <div className={styles.contactOptions}>
            <div className={styles.contactHeader}>
              <IoChatboxEllipsesOutline className={styles.contactIcon} />
              <p>Chat with us</p>
            </div>
            <p>Our support team is available 24/7 to assist you. <b>koherentlimited@gmail.com</b></p>
          </div>

          <div className={styles.contactOptions}>
            <div className={styles.contactHeader}>
              <CiLocationOn className={styles.contactIcon} />
              <p>Visit us</p>
            </div>
            <p>Stop by our headquarters in Hong Kong for a quick chat.</p>
          </div>

          <div className={styles.contactOptions}>
            <div className={styles.contactHeader}>
              <IoCallOutline className={styles.contactIcon} />
              <p>Call us</p>
            </div>
            <p>Available Mon&ndash;Fri, 9am to 5pm</p>
            <p>+852 5409 1111</p>
          </div>
        </div>

        <div className={styles.contactRight}>
          <div className={styles.contactFormHeading}>
            <p className={styles.headingOne}>Have a question or a project in mind?</p>
            <p className={styles.headingTwo}>
              Share a few details and let&apos;s explore how we can work together.
            </p>
          </div>

          <div className={styles.contactForm}>
            <form>
              <input
                className={styles.inputStyle}
                placeholder="Your name"
                type="text"
              />
              <input
                className={styles.inputStyle}
                placeholder="Company or organization"
                type="text"
              />
              <input
                className={styles.inputStyle}
                placeholder="Phone number"
                type="tel"
              />
              <textarea
                className={styles.inputTextArea}
                placeholder="Tell us about your vision or needs"
              />
              <div className={styles.checkboxInputs}>
                <div>
                  <input type="checkbox" id="web" name="Web" />
                  <label htmlFor="web">Web</label>
                </div>
                <div>
                  <input type="checkbox" id="mobile" name="Mobile" />
                  <label htmlFor="mobile">Mobile</label>
                </div>
                <div>
                  <input type="checkbox" id="wearable" name="Wearable" />
                  <label htmlFor="wearable">Wearable</label>
                </div>
                <div>
                  <input type="checkbox" id="allinone" name="All-in-one" />
                  <label htmlFor="allinone">All-in-one</label>
                </div>
                <div>
                  <input type="checkbox" id="others" name="Others" />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
              <button className={styles.contactButton}>Let&apos;s get in touch</button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
