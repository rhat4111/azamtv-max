import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "../../../components/search/search";
import styles from "./tv-series.module.scss";
import CustomSlider from "../../../components/slider/slider";

const TVSeries = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "200px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "30px",
        },
      },
    ],
  };

  const series = {
    title: "Max Series",
    type: "image",
    redirectUrl: "/tv-series/detail",
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
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
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
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
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
        <Slider {...settings}>
          <div className={styles.item}>
            <img src="/images/carousel/series/1.png" />
          </div>
          <div className={styles.item}>
            <img src="/images/carousel/series/2.png" />
          </div>
          <div className={styles.item}>
            <img src="/images/carousel/series/3.png" />
          </div>
        </Slider>
        <div className={styles.carousels}>
          <CustomSlider {...series} />
        </div>
      </div>
    </div>
  );
};

export default TVSeries;
