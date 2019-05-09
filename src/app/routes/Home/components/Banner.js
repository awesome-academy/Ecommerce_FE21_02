import React from "react";
import slide01 from "images/slides/slide-1.jpg";
import slide02 from "images/slides/slide-2.jpg";
import slide03 from "images/slides/slide-3.jpg";
const Banner = () => {
  return (
    <section className="banner">
      <div
        className="carousel slide"
        id="bannerCarousel"
        data-ride="carousel"
        data-interval="false"
      >
        <div className="banner__overlay">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Rượu</span>
            <span className="heading-primary--sub">Vang Đỏ </span>
            <span className="heading-primary--muted">Since 1980 </span>
          </h1>
        </div>
        <ol className="carousel-indicators">
          <li
            className="active"
            data-target="#bannerCarousel"
            data-slide-to="0"
          />
          <li data-target="#bannerCarousel" data-slide-to="1" />
          <li data-target="#bannerCarousel" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={slide01} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slide02} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slide03} alt="Third slide" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
