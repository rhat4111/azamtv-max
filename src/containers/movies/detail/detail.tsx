import { useState } from "react";
import { Button } from "antd";
import CustomSlider from "../../../components/slider/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "../../../components/search/search";
import styles from "./detail.module.scss";

const Player = () => {
  const tabs = ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"];
  const [selectedTab, setSelectedTab] = useState("Season 1");

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const movies = {
    title: "Other Movies",
    type: "image",
    redirectUrl: "/movies/detail",
    items: [
      {
        name: "Njia Panda",
        image: "/images/mark/movies/1.png",
      },
      {
        name: "Star Wars",
        image: "/images/mark/movies/2.png",
      },
      {
        name: "Harry Potter",
        image: "/images/mark/movies/3.png",
      },
      {
        name: "After",
        image: "/images/mark/movies/4.png",
      },
      {
        name: "Black Panther",
        image: "/images/mark/movies/5.png",
      },
      {
        name: "Mission: Impossible - Fall Out",
        image: "/images/mark/movies/6.png",
      },
      {
        name: "Mission: Impossible - Fall Out",
        image: "/images/mark/movies/6.png",
      },
      {
        name: "Mission: Impossible - Fall Out",
        image: "/images/mark/movies/6.png",
      },
    ],
    settings: {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 912,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Search />
      </div>
      <div className={styles.body}>
        <div className={styles.main}>
          <div className={styles.stage}>
            <img src="/images/movie_sample.png" />
            <div className={styles.detailInfo}>
              <p className={styles.title}>Mission: Impossible - Fallout</p>
              <p className={styles.description}>
                A group of terrorists plans to detonate three plutonium cores
                for a simultaneous nuclear attack on different cities. Ethan
                Hunt, along with his IMF team, sets out to stop the carnage.
              </p>
              <Button className={styles.watchButton}>Watch Now</Button>
            </div>
          </div>
        </div>
        <div className={styles.carousel}>
          <CustomSlider {...movies} />
        </div>
      </div>
    </div>
  );
};

export default Player;
