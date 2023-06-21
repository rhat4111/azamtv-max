import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./tv-guide.module.scss";

interface TimelineProps {
  name: string;
  time: string;
}

interface Props {
  name: string;
  avatar: string;
  timeline: TimelineProps[];
}

const TVGuide: FC<Props> = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img alt="logo" src={props.avatar} />
        <span>{props.name}</span>
      </div>
      <div className={styles.slider}>
        <Slider {...settings}>
          {props.timeline.map((item, index) => {
            return (
              <div key={index} className={styles.sliderItem}>
                <div>
                  <p>{item.name}</p>
                  <p>{item.time}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TVGuide;
