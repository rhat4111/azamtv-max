import React, { FC, useState } from "react";
import { Button } from "antd";
import Link from "next/link";
import {
  DesktopOutlined,
  DribbbleOutlined,
  EllipsisOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  WalletOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import styles from "./sidebar.module.scss";

interface Props {
  active: string;
  authorized: boolean;
}

const Sidebar: FC<Props> = (props) => {
  const [lang, setLang] = useState("en");

  const links = [
    {
      id: "home",
      name: "Home",
      url: "/",
      icon: <HomeOutlined style={{ fontSize: "26px" }} />,
    },
    {
      id: "live-tv",
      name: "Live TV",
      url: "/live-tv",
      icon: <WifiOutlined style={{ fontSize: "26px" }} />,
    },
    {
      id: "movies",
      name: "Movies",
      url: "/movies",
      icon: <VideoCameraOutlined style={{ fontSize: "26px" }} />,
    },
    {
      id: "sports",
      name: "Sports",
      url: "/sports",
      icon: <DribbbleOutlined style={{ fontSize: "26px" }} />,
    },
    {
      id: "tv-series",
      name: "TV Series",
      url: "/tv-series",
      icon: <DesktopOutlined style={{ fontSize: "26px" }} />,
    },
    {
      id: "radio",
      name: "Radio",
      url: "/radio",
      icon: <WalletOutlined style={{ fontSize: "26px" }} />,
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img alt="logo" src="/images/logo.png" />
      </div>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.url}>
                <a
                  className={`${styles.linkItem} ${
                    link.id === props.active ? styles.active : ``
                  }`}
                >
                  <div className={styles.icon}>
                    {typeof link.icon === "string" ? (
                      <img alt="logo" src={link.icon} />
                    ) : (
                      <>{link.icon}</>
                    )}
                  </div>
                  <span>{link.name}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className={styles.lang}
        onClick={() => setLang(lang === "en" ? "fr" : "en")}
      >
        <div>
          {lang === "en" ? (
            <div className={styles.en}>
              <img alt="flag" src="/images/flag.png" />
              <span>EN</span>
            </div>
          ) : (
            <div className={styles.fr}>
              <span>FR</span>
              <img alt="flag" src="/images/flag.png" />
            </div>
          )}
        </div>
      </div>
      {props.authorized ? (
        <div className={styles.moreLink}>
          <Link href="/profile">
            <a
              className={`${styles.linkItem} ${
                props.active === "more" ? styles.active : ``
              }`}
            >
              <div className={styles.icon}>
                <span>
                  <EllipsisOutlined style={{ fontSize: 26 }} />
                </span>
              </div>
              <span>More</span>
            </a>
          </Link>
        </div>
      ) : (
        <div className={styles.buttonGroup}>
          <Link href="/auth/register">
            <Button className={styles.registerButton}>Register</Button>
          </Link>
          <Link href="/auth/login">
            <Button className={styles.loginButton}>Log In</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
