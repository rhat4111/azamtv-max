import { useState } from "react";
import { Button } from "antd";
import Slider from "react-slick";
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Search />
      </div>
      <div className={styles.body}>
        <div className={styles.main}>
          <div className={styles.stage}>
            <img src="/images/tv-sample.png" />
            <div className={styles.detailInfo}>
              <p className={styles.title}>Single Mama</p>
              <p className={styles.description}>
                Kwa wengine ndoa ni asali tamu inayowapa raha na kuiona dunia
                kama pepo, lakini kwa wengine ndoa ina changamoto, tabu, mateso
                na mifarakano inayopelekea wanawake kuachwa na mzigo wa kulea
                watoto peke yao.
                <br />
                <br />
                Shuhudia harakati za single mama akipambana kuwalea watoto wake
                na kukabiliana na changamoto zinazo mzunguka.
              </p>
              <Button className={styles.watchButton}>Watch Now</Button>
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
                <p>45 mins</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 3</p>
                <p>45 mins</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 4</p>
                <p>45 mins</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 5</p>
                <p>45 mins</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 6</p>
                <p>45 mins</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
                <p>45 mins</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
                <p>45 mins</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
                <p>45 mins</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
                <p>45 mins</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
                <p>45 mins</p>
              </div>
              <div className={styles.movie}>
                <img src="/images/season.png" />
                <p>Single Mama: Season 1 Episode 7</p>
                <p>45 mins</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
