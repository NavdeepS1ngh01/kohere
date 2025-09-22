"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import styles from "./style.module.css";

export default function Contact() {
  const [fullName, setfullName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }
  return (
    <>
      <div className={`patrick-hand-regular contact-container`}>
        <Navbar></Navbar>
        <main className={styles.formContainer}>
          <form className={styles.contactForm}>
            <label>Name</label>
            <input
            className={styles.inputArea}
              type="text"
              value={fullName}
              required={true}
              onChange={(event) => setfullName(event.target.value)}
            ></input>
            <label>Company Name</label>
            <input
            className={styles.inputArea}
              type="text"
              value={companyName}
              onChange={(event) => setcompanyName(event.target.value)}
            ></input>
            <label>Email</label>
            <input
            className={styles.inputArea}
              type="text"
              value={email}
              required={true}
              onChange={(event) => setemail(event.target.value)}
            ></input>
            <label>Message</label>
            <textarea
              className={styles.formTextarea}
              value={message}
              placeholder="Please, type your queries..."
              style={{ width: "70ch", height: "40ch" }}
              onChange={(event) => setmessage(event.target.value)}
            ></textarea>
          </form>
          <button
            onClick={handleSubmit}
            type="button"
            className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-3.5 h-3.5 text-white me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            Reach out!
          </button>
        </main>
      </div>
    </>
  );
}
