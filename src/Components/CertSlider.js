import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Pages/crypto.css";
import logo from "../img/laptop1.jpg";
import office from "../img/office2.jpg";

export default class CertSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3.7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <div className="mt-5">
        {/* <h3 className="fw-bold text-center">Our Clients Reviews</h3>
        <p className="text-center text-uppercase fw-bold">
          What they are saying
        </p> */}
        <Slider {...settings}>
          {" "}
          <div className=" text-color px-3">
            <div className="review-container rounded">
              <img
                className="img-fluid"
                style={{ objectFit: "cover", height: "100%" }}
                src={logo}
                alt="logo"
              />
            </div>
          </div>
          <div className="px-3">
            <div className="review-container rounded">
              <img
                className="img-fluid"
                style={{ objectFit: "cover", height: "100%" }}
                src={logo}
                alt="logo"
              />
            </div>
          </div>
          <div className="px-3">
            <div className="review-container rounded">
              <img
                className="img-fluid"
                style={{ objectFit: "cover", height: "100%" }}
                src={logo}
                alt="logo"
              />
            </div>
          </div>
          <div className="px-3">
            <div className="review-container rounded">
              <img
                className="img-fluid"
                style={{ objectFit: "cover", height: "100%" }}
                src={logo}
                alt="logo"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
