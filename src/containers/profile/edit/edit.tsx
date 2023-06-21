import React, { useState } from "react";
import Link from "next/link";
import { Button, Col, Input, Row, Select } from "antd";
import styles from "./edit.module.scss";

const EditProfile = () => {
  const [gender, setGender] = useState("male");
  const genders = [
    {
      id: "male",
      name: "Male",
      icon: "/images/icons/male.svg",
    },
    {
      id: "female",
      name: "Female",
      icon: "/images/icons/female.svg",
    },
  ];

  return (
    <div className={styles.container}>
      <p className={styles.header}>Edit Profile</p>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <div className={styles.avatar}>
            <img src="/images/avatar.png" />
            <a>Change Photo</a>
          </div>
          <div className={styles.detailInfo}>
            <Row gutter={50}>
              <Col sm={12}>
                <div className={styles.formGroup}>
                  <label>First Name</label>
                  <Input className={styles.textField} defaultValue="Darwin" />
                </div>
              </Col>
              <Col sm={12}>
                <div className={styles.formGroup}>
                  <label>Last Name</label>
                  <Input
                    className={styles.textField}
                    defaultValue="Alexander"
                  />
                </div>
              </Col>
              <Col sm={12}>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <Input
                    className={styles.textField}
                    defaultValue="darwin@mail.com"
                  />
                </div>
              </Col>
              <Col sm={12}>
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <Row gutter={18}>
                    <Col sm={8}>
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
                    <Col sm={16}>
                      <Input
                        className={styles.textField}
                        defaultValue="812345678"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm={12}>
                <div className={styles.formGroup}>
                  <label>Date of Birth</label>
                  <Row gutter={18}>
                    <Col sm={4}>
                      <Input
                        style={{ textAlign: "center" }}
                        className={styles.textField}
                        defaultValue="16"
                      />
                    </Col>
                    <Col sm={4}>
                      <Input
                        style={{ textAlign: "center" }}
                        className={styles.textField}
                        defaultValue="01"
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        style={{ textAlign: "center" }}
                        className={styles.textField}
                        defaultValue="1987"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm={12}>
                <div className={styles.formGroup}>
                  <label>Gender</label>
                  <div className={styles.genderBoard}>
                    {genders.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className={`${styles.gender} ${
                            item.id === gender ? styles.active : ``
                          }`}
                          onClick={() => setGender(item.id)}
                        >
                          <img src={item.icon} />
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
              <Col sm={24}>
                <Button className={styles.changePasswordButton}>
                  Change Password
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.footer}>
          <Link href="/profile">
            <Button className={styles.saveButton}>Save</Button>
          </Link>
          <Link href="/profile">
            <Button className={styles.cancelButton}>Cancel</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
