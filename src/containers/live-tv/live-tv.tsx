import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "../../components/search/search";
import CustomSlider from "../../components/slider/slider";
import styles from "./live-tv.module.scss";

const LiveTV = () => {
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

  const news = {
    title: "News",
    type: "image",
    items: [
      {
        name: "MBC MAX",
        image: "/images/mark/news/max.png",
      },
      {
        name: "UTV",
        image: "/images/mark/news/utv.png",
      },
      {
        name: "Fox Entertainment",
        image: "/images/mark/news/fox.png",
      },
      {
        name: "Sinema Zetu",
        image: "/images/mark/news/zetu.png",
      },
      {
        name: "History",
        image: "/images/mark/news/history.png",
      },
      {
        name: "History",
        image: "/images/mark/news/history.png",
      },
      {
        name: "History",
        image: "/images/mark/news/history.png",
      },
      {
        name: "History",
        image: "/images/mark/news/history.png",
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

  const sports = {
    title: "Sports",
    type: "image",
    items: [
      {
        name: "Kwese Free Sport",
        image: "/images/mark/channels/1.png",
      },
      {
        name: "W-Sport",
        image: "/images/mark/channels/2.png",
      },
      {
        name: "MBC MAX",
        image: "/images/mark/channels/3.png",
      },
      {
        name: "ESPN",
        image: "/images/mark/channels/4.png",
      },
      {
        name: "Fight Sports",
        image: "/images/mark/channels/5.png",
      },
      {
        name: "Fight Sports",
        image: "/images/mark/channels/5.png",
      },
      {
        name: "Fight Sports",
        image: "/images/mark/channels/5.png",
      },
      {
        name: "Fight Sports",
        image: "/images/mark/channels/5.png",
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
            <img src="/images/carousel/tv/1.png" />
          </div>
          <div className={styles.item}>
            <img src="/images/carousel/tv/2.png" />
          </div>
          <div className={styles.item}>
            <img src="/images/carousel/tv/3.png" />
          </div>
        </Slider>
        <div className={styles.carousels}>
          <CustomSlider {...news} />
          <CustomSlider {...sports} />
        </div>
      </div>
    </div>
  );
};

export default LiveTV;
