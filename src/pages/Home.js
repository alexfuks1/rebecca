import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import vid from "../media/video.mp4";
import s1 from "../media/s1.jpg";
import s2 from "../media/s2.jpg";
import s3 from "../media/s3.jpg";
import s4 from "../media/s4.jpg";
import s5 from "../media/s5.jpg";
import present from "../media/present.png";
import mainlogo from "../media/headerlogo.png";

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const settings = {
  dots: false,
  infinite: true,
  fade: true,
  autoplay: true,
  speed: 0,
  autoplaySpeed: 3000,
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Home = () => {
  const [togglePresent, setTogglePresnt] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTogglePresnt(false);
    }, 3500);
  }, []);
  return (
    <div className="position-relative">
      <div className={togglePresent ? "present" : "present active"}>
        <img src={present} alt="" />
      </div>
      <div className="home">
      <div className="d-block d-sm-none main-logo-mobile text-center">
        <img src={mainlogo} alt="mainlogo" />
      </div>
        <Slider className="d-none d-sm-block" {...settings}>
          <div className="slider-item">
            <div className="video-box">
              <video width="800" heigh="800" autoPlay muted>
                <source src={vid} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="slider-item">
            <img src={s1} alt="" />
          </div>
          <div className="slider-item">
            <img src={s2} alt="" />
          </div>
          <div className="slider-item">
            <img src={s3} alt="" />
          </div>
          <div className="slider-item">
            <img src={s4} alt="" />
          </div>
          <div className="slider-item">
            <img src={s5} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
