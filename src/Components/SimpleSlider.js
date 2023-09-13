import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <div className="mt-5">
        <Slider {...settings}>
          {" "}
          <div>
            <p className="text-center text-uppercase fw-bold">
              What they are saying
            </p>
            <div className="px-5">
              <p className="text-muted text-center mx-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, ipsam consequuntur, distinctio impedit, inventore
                perferendis necessitatibus fugit tempore vitae veniam quia
                perspiciatis odit.
              </p>
            </div>
            <div
              className="name text-center fw-bold"
              style={{ lineHeight: 0.4 }}
            >
              <p className="text-uppercase">rami maher</p>
              <p className="text-uppercase">ui ux designer</p>
            </div>
          </div>
          <div>
            <p className="text-center text-uppercase fw-bold">
              What they are saying
            </p>
            <div className="px-5">
              <p className="text-muted text-center mx-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, ipsam consequuntur, distinctio impedit, inventore
                perferendis necessitatibus fugit tempore vitae veniam quia
                perspiciatis odit.
              </p>
            </div>
            <div
              className="name text-center fw-bold"
              style={{ lineHeight: 0.4 }}
            >
              <p className="text-uppercase">rami maher</p>
              <p className="text-uppercase">ui ux designer</p>
            </div>
          </div>
          <div>
            <p className="text-center text-uppercase fw-bold">
              What they are saying
            </p>
            <div className="px-5">
              <p className="text-muted text-center mx-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, ipsam consequuntur, distinctio impedit, inventore
                perferendis necessitatibus fugit tempore vitae veniam quia
                perspiciatis odit.
              </p>
            </div>
            <div
              className="name text-center fw-bold"
              style={{ lineHeight: 0.4 }}
            >
              <p className="text-uppercase">rami maher</p>
              <p className="text-uppercase">ui ux designer</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
