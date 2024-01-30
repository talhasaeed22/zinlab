import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogos}>
        <span>Follow us</span>
        <i className="fa fa-youtube-play" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.linksItem}>
          <span>Internal Links</span>
          <span>Documentaries</span>
          <span>Themes</span>
          <span>Chrome casts</span>
        </div>
        <div className={styles.linksItem}>
          <span>Enterprise</span>
          <span>Download Chrome Browser</span>
          <span>Chrome Browser for Enterprise</span>
          <span>Chrome Browser Devices</span>
          <span>ChromeOS</span>
          <span>Google Cloud</span>
        </div>
        <div className={styles.linksItem}>
          <span>Internal Links</span>
          <span>Documentaries</span>
          <span>Themes</span>
          <span>Chrome casts</span>
        </div>
        <div className={styles.linksItem}>
          <span>Enterprise</span>
          <span>Download Chrome Browser</span>
          <span>Chrome Browser for Enterprise</span>
          <span>Chrome Browser Devices</span>
          <span>ChromeOS</span>
          <span>Google Cloud</span>
        </div>
        <div className={styles.linksItem}>
          <span>Internal Links</span>
          <span>Documentaries</span>
          <span>Themes</span>
          <span>Chrome casts</span>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.left}>
          <Image width={150} height={100} src="/vercel.svg" />
          <span>Privacy Policy</span>
          <span>Terms and conditionsy</span>
          <span>Cookies Policy</span>
          <span>About us</span>
          <span>EULA</span>
          <span>Contact</span>
        </div>
        <div className={styles.right}>
          <i className="fa fa-moon-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
