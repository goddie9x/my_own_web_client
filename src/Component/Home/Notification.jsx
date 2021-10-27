import React from "react";
import NotificationCard from "./NotificationCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./NotificationSlide.scss";

export default function Notification(probs) {
  let settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="top-notifications">
      <h2 className="component-title mt-3">Thông báo gần đây:</h2>
      <Slider {...settings} className="my-3">
        {probs.notifs.map((notif, index) => (
          <NotificationCard notif={notif} key={index} />
        ))}
      </Slider>
      <div className="d-flex justify-content-end">
        <Link to="/posts" className="view-full me-5">
          Xem thêm ...
        </Link>
      </div>
    </div>
  );
}
