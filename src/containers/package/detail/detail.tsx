import Link from "next/link";
import { Button } from "antd";
import ChannelList from "../../../components/channel-list/channel-list";
import styles from "./detail.module.scss";
import SelectPayment from "../../../components/select-payment/select-payment";

const DetailPackage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Package Detail</div>
      <div className={styles.body}>
        <div className={styles.detailInfo}>
          <p className={styles.title}>Selected Package</p>
          <p className={styles.name}>Azam Play</p>
          <p className={styles.price}>
            <span>TZS 23,000</span>
            <span>Per Month</span>
          </p>
          <SelectPayment />
          <Link href="/profile">
            <Button className={styles.upgradeNowButton}>Upgrade Now</Button>
          </Link>
          <Link href="/profile">
            <Button className={styles.upgradeNextMonthButton}>
              Upgrade Next Month
            </Button>
          </Link>
        </div>
        <ChannelList />
      </div>
    </div>
  );
};

export default DetailPackage;
