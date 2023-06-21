import { Button } from "antd";
import Navbar from "../../components/layout/navbar/navbar";
import TVGuide from "../../components/tv-guide/tv-guide";
import styles from "./tv.module.scss";

const TV = () => {
  const schedule = [
    "Today",
    "Wed, 06/07",
    "Thu, 07/07",
    "Fri, 08/07",
    "Sat, 09/07",
    "Sun, 10/07",
  ];

  const guides = [
    {
      name: "UTV",
      avatar: "/images/tv/utv.png",
      timeline: [
        { name: "Dibaji", time: "04:00 PM" },
        { name: "Adhuhuri Live", time: "05:00 PM" },
        { name: "UEFA Euro Magazine Show", time: "05:30 PM" },
        { name: "Playlist", time: "06:00 PM" },
        { name: "Alasiri Lounge Live", time: "07:00 PM" },
        { name: "Dibaji", time: "04:00 PM" },
        { name: "Adhuhuri Live", time: "05:00 PM" },
        { name: "UEFA Euro Magazine Show", time: "05:30 PM" },
        { name: "Playlist", time: "06:00 PM" },
        { name: "Alasiri Lounge Live", time: "07:00 PM" },
        { name: "Dibaji", time: "04:00 PM" },
        { name: "Adhuhuri Live", time: "05:00 PM" },
        { name: "UEFA Euro Magazine Show", time: "05:30 PM" },
        { name: "Playlist", time: "06:00 PM" },
        { name: "Alasiri Lounge Live", time: "07:00 PM" },
      ],
    },
    {
      name: "MBC MAX",
      avatar: "/images/tv/mbc_max.png",
      timeline: [
        { name: "Dibaji", time: "04:00 PM" },
        { name: "Adhuhuri Live", time: "05:00 PM" },
        { name: "UEFA Euro Magazine Show", time: "05:30 PM" },
        { name: "Playlist", time: "06:00 PM" },
        { name: "Alasiri Lounge Live", time: "07:00 PM" },
        { name: "Dibaji", time: "04:00 PM" },
        { name: "Adhuhuri Live", time: "05:00 PM" },
        { name: "UEFA Euro Magazine Show", time: "05:30 PM" },
        { name: "Playlist", time: "06:00 PM" },
        { name: "Alasiri Lounge Live", time: "07:00 PM" },
        { name: "Dibaji", time: "04:00 PM" },
        { name: "Adhuhuri Live", time: "05:00 PM" },
        { name: "UEFA Euro Magazine Show", time: "05:30 PM" },
        { name: "Playlist", time: "06:00 PM" },
        { name: "Alasiri Lounge Live", time: "07:00 PM" },
      ],
    },
    {
      name: "Fox",
      avatar: "/images/tv/fox.png",
      timeline: [
        { name: "Dibaji", time: "04:00 PM" },
        { name: "Adhuhuri Live", time: "05:00 PM" },
        { name: "UEFA Euro Magazine Show", time: "05:30 PM" },
        { name: "Playlist", time: "06:00 PM" },
        { name: "Alasiri Lounge Live", time: "07:00 PM" },
        { name: "Dibaji", time: "04:00 PM" },
        { name: "Adhuhuri Live", time: "05:00 PM" },
        { name: "UEFA Euro Magazine Show", time: "05:30 PM" },
        { name: "Playlist", time: "06:00 PM" },
        { name: "Alasiri Lounge Live", time: "07:00 PM" },
        { name: "Dibaji", time: "04:00 PM" },
        { name: "Adhuhuri Live", time: "05:00 PM" },
        { name: "UEFA Euro Magazine Show", time: "05:30 PM" },
        { name: "Playlist", time: "06:00 PM" },
        { name: "Alasiri Lounge Live", time: "07:00 PM" },
      ],
    },
  ];

  return (
    <>
      <Navbar active="tv" />
      <div className={styles.container}>
        <div className={styles.header}>
          {schedule.map((date, index) => {
            return (
              <Button
                type="text"
                className={index === 0 ? styles.active : ``}
                key={index}
              >
                {date}
              </Button>
            );
          })}
        </div>
        <div className={styles.body}>
          {guides.map((guide, index) => {
            return <TVGuide key={index} {...guide} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TV;
