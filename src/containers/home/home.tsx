import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./home.module.scss";
import Search from "../../components/search/search";
import CustomSlider from "../../components/slider/slider";

const Home = () => {
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

  const watching = {
    title: "Continue Watching",
    type: "movie",
    items: [
      {
        name: "Panguso",
        movie: "/movies/1.mp4",
      },
      {
        name: "Vodafone Premier League",
        movie: "/movies/1.mp4",
      },
      {
        name: "Panguso",
        movie: "/movies/1.mp4",
      },
      {
        name: "Vodafone Premier League",
        movie: "/movies/1.mp4",
      },
      {
        name: "Panguso",
        movie: "/movies/1.mp4",
      },
      {
        name: "Vodafone Premier League",
        movie: "/movies/1.mp4",
      },
      {
        name: "Panguso",
        movie: "/movies/1.mp4",
      },
      {
        name: "Vodafone Premier League",
        movie: "/movies/1.mp4",
      },
      {
        name: "Panguso",
        movie: "/movies/1.mp4",
      },
      {
        name: "Vodafone Premier League",
        movie: "/movies/1.mp4",
      },
      {
        name: "Panguso",
        movie: "/movies/1.mp4",
      },
      {
        name: "Vodafone Premier League",
        movie: "/movies/1.mp4",
      },
      {
        name: "Panguso",
        movie: "/movies/1.mp4",
      },
      {
        name: "Vodafone Premier League",
        movie: "/movies/1.mp4",
      },
      {
        name: "Panguso",
        movie: "/movies/1.mp4",
      },
      {
        name: "Vodafone Premier League",
        movie: "/movies/1.mp4",
      },
      {
        name: "Panguso",
        movie: "/movies/1.mp4",
      },
      {
        name: "Vodafone Premier League",
        movie: "/movies/1.mp4",
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

  const news = {
    title: "MAX Live",
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

  const movies = {
    title: "Max Movies",
    type: "image",
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
            <img src="/images/carousel/home/1.png" />
          </div>
          <div className={styles.item}>
            <img src="/images/carousel/home/2.png" />
          </div>
          <div className={styles.item}>
            <img src="/images/carousel/home/3.png" />
          </div>
        </Slider>
        <div className={styles.carousels}>
          <CustomSlider {...watching} />
          <CustomSlider {...news} />
          <CustomSlider {...series} />
          <CustomSlider {...movies} />
        </div>
      </div>
    </div>
  );
};

export default Home;
