import React, { FC } from "react";
import Link from "next/link";
import { Button } from "antd";
import styles from "./navbar.module.scss";

interface Props {
  active: string;
}

const Navbar: FC<Props> = (props) => {
  const tabs = [
    { id: "profile", name: "My Profile", url: "/profile" },
    { id: "decoder", name: "Decoder", url: "/decoder" },
    { id: "transaction", name: "Transaction", url: "/transaction" },
    { id: "tv", name: "TV Guide", url: "/tv" },
  ];

  return (
    <div className={styles.navbar}>
      {tabs.map((tab) => {
        return (
          <Button
            key={tab.id}
            shape="round"
            className={`${tab.id === props.active ? styles.active : ``}`}
          >
            <Link href={tab.url}>{tab.name}</Link>
          </Button>
        );
      })}
    </div>
  );
};

export default Navbar;
