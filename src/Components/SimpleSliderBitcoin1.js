import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Pages/crypto.css";
import office from "../img/office2.jpg";

export default class SimpleSlider1 extends Component {
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
      <div className="mt-5 text-color">
        <Slider {...settings}>
          {" "}
          <div className=" text-color px-3">
            <div className="review-container px-3 darker-theme rounded py-2">
              <div className="stars darker-theme">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star mx-1" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star mx-1" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <p className="text-muted mt-2 darker-theme mx-0 rounded">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, ipsam consequuntur, distinctio impedit, inventore
                perferendis necessitatibus fugit tempore vitae veniam quia
                perspiciatis odit.
              </p>
              <div className="name fw-bold d-flex align-items-center mt-3 rounded">
                <div>
                  <img
                    src={office}
                    alt=""
                    style={{ height: 36, width: 36, borderRadius: 18 }}
                  />
                </div>
                <div className="ms-2" style={{ fontSize: 13 }}>
                  UI UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="px-3">
            <div className="px-3 darker-theme rounded py-2 review-container">
              <div className="stars darker-theme">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star mx-1" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star mx-1" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <p className="text-muted mt-2 darker-theme mx-0 rounded">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, ipsam consequuntur, distinctio impedit, inventore
                perferendis necessitatibus fugit tempore vitae veniam quia
                perspiciatis odit.
              </p>
              <div className="name fw-bold d-flex align-items-center mt-3 rounded">
                <div>
                  <img
                    src={office}
                    alt=""
                    style={{ height: 36, width: 36, borderRadius: 18 }}
                  />
                </div>
                <div className="ms-2" style={{ fontSize: 13 }}>
                  UI UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="px-3">
            <div className="px-3 darker-theme rounded py-2 review-container">
              <div className="stars darker-theme">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star mx-1" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star mx-1" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <p className="text-muted mt-2 darker-theme mx-0 rounded">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, ipsam consequuntur, distinctio impedit, inventore
                perferendis necessitatibus fugit tempore vitae veniam quia
                perspiciatis odit.
              </p>
              <div className="name fw-bold d-flex align-items-center mt-3 rounded">
                <div>
                  <img
                    src={office}
                    alt=""
                    style={{ height: 36, width: 36, borderRadius: 18 }}
                  />
                </div>
                <div className="ms-2" style={{ fontSize: 13 }}>
                  UI UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="px-3">
            <div className="px-3 darker-theme rounded py-2 review-container">
              <div className="stars darker-theme">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star mx-1" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star mx-1" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <p className="text-muted mt-2 darker-theme mx-0 rounded">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, ipsam consequuntur, distinctio impedit, inventore
                perferendis necessitatibus fugit tempore vitae veniam quia
                perspiciatis odit.
              </p>
              <div className="name fw-bold d-flex align-items-center mt-3 rounded">
                <div>
                  <img
                    src={office}
                    alt=""
                    style={{ height: 36, width: 36, borderRadius: 18 }}
                  />
                </div>
                <div className="ms-2" style={{ fontSize: 13 }}>
                  UI UX Designer
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
