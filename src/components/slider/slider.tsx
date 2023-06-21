import React, { FC } from "react";
import Router from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.scss";

interface Props {
  title: string;
  items: any;
  settings: Object;
  type: string;
  redirectUrl?: string;
}

const CustomSlider: FC<Props> = (props) => {
  const handleClick = () => {
    props.redirectUrl && Router.push(props.redirectUrl);
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.title}</p>
      <Slider className={styles.slider} {...props.settings}>
        {props.items &&
          props.items.map((item: any, index: number) => {
            return (
              <div
                className={styles.item}
                key={index}
                onClick={handleClick}
                style={{ cursor: props.redirectUrl ? "pointer" : "default" }}
              >
                {props.type === "image" ? (
                  <img src={item.image} />
                ) : (
                  <video src={item.movie} controls />
                )}
                <p>{item.name}</p>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default CustomSlider;
