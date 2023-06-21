import React, { FC } from "react";
import styles from "./progress.module.scss";

interface Props {
  total: number;
  index: number;
}

const Progress: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {props.index}/{props.total}
      </div>
      <div className={styles.bar}>
        <div style={{ width: `${(props.index / props.total) * 100}%` }} />
      </div>
    </div>
  );
};

export default Progress;
