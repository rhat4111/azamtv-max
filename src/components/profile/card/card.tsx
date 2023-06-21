import { Button } from "antd";
import React from "react";
import styles from "./card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <div>
        <p>1. Smartcard (Primary)</p>
        <p>MASUKA NGWESA</p>
        <p>212914627087</p>
        <p>TV - Azam Plus New 1 Week</p>
      </div>
      <div>
        <Button className={styles.deleteButton}>Delete</Button>
        <Button className={styles.refreshButton}>Refresh</Button>
      </div>
    </div>
  );
};

export default Card;
