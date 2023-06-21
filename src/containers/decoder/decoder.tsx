import Link from "next/link";
import { Button } from "antd";
import Navbar from "../../components/layout/navbar/navbar";
import styles from "./decoder.module.scss";

const Profile = () => {
  return (
    <>
      <Navbar active="decoder" />
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.detailInfo}>
            <div className={styles.header}>My Decoder</div>
            <div className={styles.body}>
              <p>
                <span>Name</span>
                <span>Darvin</span>
              </p>
              <p>
                <span>Smartcard</span>
                <span>222726363728</span>
              </p>
              <p>
                <span>Package</span>
                <span>AZAM PLAY</span>
              </p>
              <p>
                <span>Status</span>
                <span>
                  Active
                  <Button>Renew</Button>
                </span>
              </p>
              <p>
                <span>Validity Until</span>
                <span>20 June 2021</span>
              </p>
            </div>
          </div>
          <div className={styles.toolbar}>
            <Button>Pay</Button>
            <Link href="/package/upgrade">
              <Button>Upgrade</Button>
            </Link>
            <Button>Retrack</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
