import React, { FC } from "react";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";
import styles from "./layout.module.scss";

interface Props {
  active?: string;
  children: React.ReactNode;
  authorized?: boolean;
}

const Layout: FC<Props> = ({
  active = "more",
  authorized = true,
  children,
}) => {
  return (
    <div className={styles.layout}>
      <Sidebar active={active} authorized={authorized} />
      <div className={styles.content}>
        <div className={styles.body}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
