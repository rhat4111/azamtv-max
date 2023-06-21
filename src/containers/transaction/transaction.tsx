import Navbar from "../../components/layout/navbar/navbar";
import History from "../../components/history/history";
import styles from "./transaction.module.scss";

const Profile = () => {
  return (
    <>
      <Navbar active="transaction" />
      <div className={styles.container}>
        <div className={styles.historyContainer}>
          <History />
        </div>
      </div>
    </>
  );
};

export default Profile;
