import React, { useState } from "react";
import Router from "next/router";
import { Button, Col, Input, Select, Row } from "antd";
import Link from "next/link";
import Progress from "../../../components/progress/progress";
import styles from "./register.module.scss";

const TextField = () => {
  const [text, setText] = useState("_");

  return (
    <Input
      className={styles.textField}
      style={{ textAlign: "center" }}
      maxLength={1}
      value={text}
      onFocus={() => setText("")}
      onBlur={() => text === "" && setText("_")}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

const Fail = () => {
  const [step, setStep] = useState(1);

  const handleRegister = () => {
    step < 4 ? setStep(step + 1) : Router.push("/auth/login");
  };

  const handleBack = () => {
    step > 1 && setStep(step - 1);
  };

  return (
    <div className={styles.container}>
      <div>
        <img src="/images/register_bg.png" alt="" />
      </div>
      <div className={styles.board}>
        <div className={styles.back}>
          {step !== 1 && (
            <img src="/images/icons/arrow_left.svg" onClick={handleBack} />
          )}
        </div>
        <img src="/images/logo_lg.png" className={styles.logo} />
        <p className={styles.title}>Register</p>

        <div className={styles.content}>
          {step === 1 && (
            <>
              <p className={styles.stepName}>Your phone number</p>
              <Row className={styles.form}>
                <Col xs={24}>
                  <div className={styles.formGroup}>
                    <Row gutter={15}>
                      <Col xs={8}>
                        <Select
                          className={styles.selectBox}
                          defaultValue="+62"
                          suffixIcon={
                            <img src="/images/icons/arrow_down.svg" />
                          }
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
              </Row>
            </>
          )}
          {step === 2 && (
            <>
              <p className={styles.stepName}>One Time Password</p>
              <p className={styles.description}>
                Please enter One Time Password you received through SMS to
                verify your mobile number
              </p>
              <Row className={styles.form}>
                <Col xs={24}>
                  <div className={`${styles.formGroup} ${styles.otp}`}>
                    <div>
                      <TextField />
                    </div>
                    <div>
                      <TextField />
                    </div>
                    <div>
                      <TextField />
                    </div>
                    <div>
                      <TextField />
                    </div>
                    <div>
                      <TextField />
                    </div>
                  </div>
                </Col>
              </Row>
              <a>Resend OTP</a>
            </>
          )}
          {step === 3 && (
            <>
              <p className={styles.stepName}>Your Name</p>
              <div className={styles.form}>
                <Input className={styles.textField} placeholder="Your name" />
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <p className={styles.stepName}>Your SmartCard</p>
              <div className={styles.form}>
                <Input
                  className={styles.textField}
                  placeholder="SmartCard number"
                />
              </div>
              <p className={styles.description}>Optional</p>
            </>
          )}
        </div>

        <Progress total={4} index={step} />
        <Button onClick={handleRegister} className={styles.registerButton}>
          Continue
        </Button>
        <Link href="/auth/login">
          <a className={styles.login}>Already have an account? Log in here</a>
        </Link>
        <p className={styles.copyright}>@2021 Azamtv All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Fail;
