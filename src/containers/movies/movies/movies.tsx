import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "../../../components/search/search";
import CustomSlider from "../../../components/slider/slider";
import styles from "./movies.module.scss";

const Movies = () => {
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

  const movies = {
    title: "Max Movies",
    type: "image",
    redirectUrl: '/movies/detail',
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
        <Slider {...settings}>
          <div className={styles.item}>
            <img src="/images/carousel/movies/1.png" />
          </div>
          <div className={styles.item}>
            <img src="/images/carousel/movies/2.png" />
          </div>
          <div className={styles.item}>
            <img src="/images/carousel/movies/3.png" />
          </div>
        </Slider>
        <div className={styles.carousels}>
          <CustomSlider {...movies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
