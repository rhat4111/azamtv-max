import { useState } from "react";
import Router from "next/router";
import { Button, Input } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "../../components/slider/slider";
import styles from "./player.module.scss";

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

  const series = {
    title: "Max Series",
    type: "image",
    items: [
      {
        name: "Single Mama",
        image: "/images/mark/series/1.png",
      },
      {
        name: "Panguso",
        image: "/images/mark/series/2.png",
      },
      {
        name: "Fight Sports",
        image: "/images/mark/series/1.png",
      },
      {
        name: "Tandi",
        image: "/images/mark/series/3.png",
      },
      {
        name: "Shilingi",
        image: "/images/mark/series/4.png",
      },
      {
        name: "Shilingi",
        image: "/images/mark/series/4.png",
      },
      {
        name: "Shilingi",
        image: "/images/mark/series/1.png",
      },
      {
        name: "Shilingi",
        image: "/images/mark/series/1.png",
      },
    ],
    settings: {
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
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.search}>
          <Input
            prefix={<img src="/images/icons/search.svg" />}
            className={styles.textField}
            placeholder="Search"
            onKeyDown={(e) => e.keyCode === 13 && Router.push("/search")}
          />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.main}>
          <div className={styles.stage}>
            <img src="/images/movie.png" />
          </div>
          <div className={styles.detailInfo}>
            <div>
              <p>Single Mama: Season 1 Episode 1</p>
              <p>Season 1</p>
            </div>
            <div>
              Kwa wengine ndoa ni asali tamu inayowapa raha na kuiona dunia kama
              pepo, lakini kwa wengine ndoa ina changamoto, tabu, mateso na
              mifarakano inayopelekea wanawake kuachwa na mzigo wa kulea watoto
              peke yao.
              <br />
              <br />
              Shuhudia harakati za single mama akipambana kuwalea watoto wake na
              kukabiliana na changamoto zinazo mzunguka.
            </div>
          </div>
        </div>
        <div className={styles.more}>
          <p className={styles.title}>More from Single Mama</p>
          <div className={styles.tabs}>
            {tabs.map((tab, index) => {
              return (
                <Button
                  key={index}
                  shape="round"
                  onClick={() => setSelectedTab(tab)}
                  className={tab === selectedTab ? styles.active : ``}
                >
                  {tab}
                </Button>
              );
            })}
          </div>
          <div className={styles.movies}>
            <Slider {...settings}>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 2</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 3</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 4</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 5</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 6</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
              </div>
            </Slider>
          </div>
          <CustomSlider {...series} />
        </div>
      </div>
    </div>
  );
};

export default Player;
