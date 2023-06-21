import React from "react";
import Link from "next/link";
import { Button } from "antd";
import Card from "../card/card";
import styles from "./profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.overview}>
          <Link href="/profile/edit">
            <a className={styles.edit}>
              <img alt="edit" src="/images/icons/edit.svg" />
            </a>
          </Link>
          <img
            alt="profile avatar"
            src="/images/avatar.png"
            className={styles.avatar}
          />
          <div>
            <p className={styles.name}>Darvin</p>
            <p className={styles.phone}>+25501234356</p>
            <p className={styles.email}>darwin@mail.com</p>
          </div>
        </div>
        <div className={styles.smartcards}>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
