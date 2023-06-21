import Navbar from "../../../components/layout/navbar/navbar";
import Link from "next/link";
import { default as ProfileCard } from "../../../components/profile/profile/profile";
import { Row, Col } from "antd";
import styles from "./profile.module.scss";

const Profile = () => {
  const subscriptions = [
    {
      name: "Monthly",
      description: "Start from 9 USD per month",
      selected: true,
    },
    {
      name: "Weekly",
      description: "Start from 2.6 USD per week",
      selected: false,
    },
  ];

  return (
    <>
      <Navbar active="profile" />
      <div className={styles.container}>
        <ProfileCard />
        <div className={styles.subscriptionContainer}>
          <p className={styles.title}>Subscription Package</p>
          <div className={styles.subscriptions}>
            {subscriptions.map((subscription, index) => {
              return (
                <div
                  key={index}
                  className={subscription.selected ? styles.active : ``}
                >
                  <p>{subscription.name}</p>
                  <p>{subscription.description}</p>
                </div>
              );
            })}
          </div>
          <Row className={styles.packages} gutter={20}>
            <Col sm={12}>
              <Link href="/subscription/detail">
                <div className={styles.package}>
                  <img src="/images/subscription_1.png" alt="" />
                  <div>
                    <p>Sliver</p>
                    <p>
                      <span>9 USD</span>
                      <span>Per Month</span>
                    </p>
                    <p>
                      Subscribers without an active smartcard may subscribe to
                      this package. Some contents/channels may not be available
                      in your region. Please check the list of channel available
                      before you make purchase
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col sm={12}>
              <Link href="/subscription/detail">
                <div className={styles.package}>
                  <img src="/images/subscription_2.png" alt="" />
                  <div>
                    <p>Gold</p>
                    <p>
                      <span>11 USD</span>
                      <span>Per Month</span>
                    </p>
                    <p>
                      Subscribers without an active smartcard may subscribe to
                      this package. Some contents/channels may not be available
                      in your region. Please check the list of channel available
                      before you make purchase
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Profile;
