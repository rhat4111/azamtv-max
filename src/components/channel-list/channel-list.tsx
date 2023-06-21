import { Col, Row } from "antd";
import styles from "./channel-list.module.scss";

const ChannelList = () => {
  const channels = [
    1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9, 1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9, 9, 9, 4,
    5, 6, 7, 8, 9, 9, 9,
  ];

  return (
    <div className={styles.container}>
      <p className={styles.title}>Channel List (110)</p>
      <Row gutter={20}>
        {channels.map((channel, index) => {
          return (
            <Col key={index} sm={8} md={4} lg={3} className={styles.item}>
              <img
                alt="channel avatar"
                src={`/images/channels/${channel}.png`}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ChannelList;
