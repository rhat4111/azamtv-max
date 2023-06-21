import { Input } from "antd";
import Router from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./search.module.scss";
import { default as SearchField } from "../../components/search/search";
import CustomSlider from "../../components/slider/slider";

const Search = () => {
  const liveTV = {
    title: "Live TV",
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
    title: "TV Series",
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
    title: "Movies",
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
        <SearchField />
      </div>
      <div className={styles.body}>
        <p className={styles.title}>Search Results</p>
        <div className={styles.carousels}>
          <CustomSlider {...liveTV} />
          <CustomSlider {...series} />
          <CustomSlider {...movies} />
          <CustomSlider {...sports} />
        </div>
      </div>
    </div>
  );
};

export default Search;
