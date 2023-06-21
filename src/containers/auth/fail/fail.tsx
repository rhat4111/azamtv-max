import Link from "next/link";
import styles from "./fail.module.scss";

const Fail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.header}>
          <Link href="/auth/login">
            <img src="/images/icons/arrow_left.svg" />
          </Link>
        </div>
        <div className={styles.body}>
          <p className={styles.title}>Invalid account, please try again</p>
          <p className={styles.description}>
            If you don’t have account, please register through our mobile app.
            Download app from Google Play Store or App Store
          </p>
          <div className={styles.apps}>
            <a href="#">
              <img alt="google_play" src="/images/google_play.png" />
            </a>
            <a href="#">
              <img alt="app_store" src="/images/app_store.png" />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>@2021 Azamtv All Rights Reserved</p>
    </div>
  );
};

export default Fail;
