import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
        </li>
        <li>
          <Link href="/terms">
            <a>Terms & Conditions</a>
          </Link>
        </li>
        <li>
          <Link href="/support">
            <a>Support</a>
          </Link>
        </li>
      </ul>
      <div className={styles.apps}>
        <a href="#">
          <img alt="google_play" src="/images/google_play_sm.png" />
        </a>
        <a href="#">
          <img alt="app_store" src="/images/app_store_sm.png" />
        </a>
      </div>
      <div className={styles.social}>
        <a href="#">
          <img alt="facebook" src="/images/icons/facebook.svg" />
        </a>
        <a href="#">
          <img alt="instagram" src="/images/icons/instagram.svg" />
        </a>
      </div>
      <p>@2021 Azamtv All Rights Reserved</p>
    </div>
  );
};

export default Footer;
