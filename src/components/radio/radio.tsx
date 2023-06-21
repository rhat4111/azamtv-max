import { Button } from "antd";
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import styles from "./radio.module.scss";

const Radio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <Button className={styles.back}>
          <StepBackwardOutlined />
        </Button>
        <Button className={styles.play}>
          <CaretRightOutlined />
        </Button>
        <Button className={styles.next}>
          <StepForwardOutlined />
        </Button>
      </div>
      <div className={styles.file}>
        <img src="/images/ufm.png" />
        <div>
          <p>UFM</p>
          <p>UFM Radio Dar Es Salaam 107.3 Mhz</p>
        </div>
      </div>
      <div className={styles.progress}>
        <span>1:24</span>
        <div>
          <div></div>
        </div>
        <span>3:24</span>
      </div>
    </div>
  );
};

export default Radio;
