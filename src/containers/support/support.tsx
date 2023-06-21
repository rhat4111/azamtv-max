import { Button, Input } from "antd";
import styles from "./support.module.scss";

const Support = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Support</p>
        <div className={styles.body}>
          <div className={styles.card}>
            <p className={styles.title}>Email us your queries and concerns</p>
            <div className={styles.formGroup}>
              <label>Email</label>
              <Input className={styles.textField} placeholder="Your email" />
            </div>
            <div className={styles.formGroup}>
              <label>Subject</label>
              <Input
                className={styles.textField}
                placeholder="Message subject"
              />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <Input.TextArea
                className={styles.textarea}
                placeholder="I would like to..."
              />
            </div>
            <Button className={styles.sendButton}>Send</Button>
          </div>
          <div className={styles.contact}>
            <p>Or you can reach us here</p>
            <div>
              <img src="/images/carbon_phone.png" />
              <img src="/images/ci_mail.png" />
              <img src="/images/bi_whatsapp.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
