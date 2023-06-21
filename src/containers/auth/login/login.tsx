import { Col, Input, Select, Row, Button } from "antd";
import Link from "next/link";
import React from "react";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div>
          <p className={styles.title}>Log In</p>
          <Row>
            <Col xs={24}>
              <div className={styles.formGroup}>
                <Row gutter={15}>
                  <Col xs={8}>
                    <Select
                      className={styles.selectBox}
                      defaultValue="+62"
                      suffixIcon={<img src="/images/icons/arrow_down.svg" />}
                    >
                      <Select.Option
                        value="+62"
                        className={styles.selectBoxItem}
                      >
                        <img src="/images/indonesia.png" />
                        <span>+62</span>
                      </Select.Option>
                    </Select>
                  </Col>
                  <Col xs={16}>
                    <Input
                      className={styles.textField}
                      placeholder="Your mobile number"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={24}>
              <div className={styles.formGroup}>
                <Input.Password
                  placeholder="Password"
                  className={styles.textField}
                  iconRender={(visible) => (visible ? "Hide" : "Show")}
                />
              </div>
            </Col>
            <Link href="/auth/fail">
              <Button className={styles.loginButton}>Log In</Button>
            </Link>
          </Row>
        </div>
        <div>
          <p>Login using QR Code</p>
          <p>Scan this code with your phone</p>
          <img src="/images/qr.png" />
        </div>
      </div>
      <p className={styles.copyright}>@2021 Azamtv All Rights Reserved</p>
    </div>
  );
};

export default Login;
