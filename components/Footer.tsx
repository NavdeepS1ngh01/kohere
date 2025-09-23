import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-border"></div>

      <div className="footer-left">
        <div className="footer-info">
          <p id="footer-title">Kohere Limited</p>
          <p id="footer-date">Established 2025</p>
          <p id="footer-mission">
            Our mission is to empower individuals and organizations<br />
            with innovative solutions that drive growth and<br />
            deliver exceptional value to the public.
          </p>
          <p>© 2025 Kohere — All rights reserved</p>
        </div>
        <div className="footer-socials">
          <FaInstagram />
          <CiFacebook />
          <FaXTwitter />
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
          <a href="/legal">Legal</a>
        </div>
      </div>

      <div className="footer-right">
        <img className="footer-img" src="footer-map.png" alt="Map" />
      </div>
    </footer>
  );
}
