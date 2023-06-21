import React, { FC } from "react";
import Link from "next/link";
import styles from "./package.module.scss";

interface Props {
  name: string;
  price: string;
  channelCount: string;
}

const Package: FC<Props> = (props) => {
  return (
    <Link href="/package/detail">
      <div className={styles.container}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.price}>
          <span>{props.price}</span>
          <span>Per Month</span>
        </p>
        <p className={styles.channelCount}>{props.channelCount} Channels</p>
      </div>
    </Link>
  );
};

export default Package;
