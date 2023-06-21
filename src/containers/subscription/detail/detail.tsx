import { Button } from "antd";
import Link from "next/link";
import ChannelList from "../../../components/channel-list/channel-list";
import SelectPayment from "../../../components/select-payment/select-payment";
import styles from "./detail.module.scss";

const DetailSubscription = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Subscription Detail</div>
      <div className={styles.body}>
        <div className={styles.detailInfo}>
          <p className={styles.title}>Selected Package</p>
          <p className={styles.name}>Silver</p>
          <p className={styles.price}>
            <span>9 USD</span>
            <span>Per Month</span>
          </p>
          <div className={styles.validity}>
            <p>Validity</p>
            <p>30 Days</p>
          </div>
          <SelectPayment />
          <Link href="/subscription">
            <Button className={styles.confirmButton}>
              Confirm Subscription
            </Button>
          </Link>
        </div>
        <ChannelList />
      </div>
    </div>
  );
};

export default DetailSubscription;
