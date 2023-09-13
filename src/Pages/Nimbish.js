import React from "react";
import "./nimbish.css";
import comp from "../img/laptop1.jpg";
import logo from "../img/steelcraftlogo.png";

const Nimbish = () => {
  return (
    <div>
      <section className="home-section overflow-hidden position-relative">
        <div
          className="circle1-big bg3 rounded-circle position-absolute"
          style={{ right: -100, height: 400, width: 400, top: -100 }}
        ></div>
        <div className="nav-section">
          <nav
            class="navbar navbar-expand-md navbar-dark bg-themes bg-dark bg-opacity-25"
            aria-label="Fourth navbar example"
          >
            <div class="container">
              <a class="navbar-brand d-flex" href="/#">
                <img src={logo} alt="logo" />
                {/* <span className="text-colors fw-bold">SteelCraft Ent.</span> */}
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarsExample04"
                aria-controls="navbarsExample04"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarsExample04">
                <ul
                  class="navbar-nav me-auto mb-2 mb-md-0 me-5"
                  style={{ fontSize: 13 }}
                >
                  <li class="nav-item">
                    <a
                      class="nav-link text2 active"
                      aria-current="page"
                      href="/#"
                    >
                      HOME
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#">
                      ABOUT US
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="/#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      PRODUCTS
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="/#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      CERTIFICATIONS
                    </a>
                  </li>
                </ul>
                <form className="d-flex align-items-center justify-content-center">
                  <a
                    className="nav-link text-white fw-bold me-4"
                    href="/#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Login
                  </a>
                  <button
                    className="connect-wallet btn btn-outline-info bg1 rounded-pill text-color fw-bold px-4"
                    style={{ fontSize: 12 }}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="ms-md-5 px-3 pt-5">
                <h1 className="fw-bold">
                  Get set to rock UNLIMITED TRIVIA with Nimblish
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  autem voluptatem esse voluptates dignissimos reprehenderit
                  earum ducimus. Dolor velit tenetur enim?
                </p>
                <button className="btn bg1 rounded-pill text-white font1 py-2 px-3 mt-2">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-md-6 mt-3 mt-md-0" style={{ height: 300 }}>
              <div className="position-relative">
                <div
                  className="circle1 position-absolute"
                  style={{ right: 290 }}
                >
                  <img
                    className="rounded-circle"
                    src={comp}
                    alt="soccer"
                    style={{ height: 230, width: 230 }}
                  />
                </div>
                <div
                  className="circle2 position-absolute"
                  style={{ right: 180, top: 100 }}
                >
                  <img
                    className="rounded-circle"
                    src={comp}
                    alt="soccer"
                    style={{ height: 100, width: 100 }}
                  />
                </div>
                <div
                  className="circle3 position-absolute"
                  style={{ right: 240, top: 190 }}
                >
                  <img
                    className="rounded-circle"
                    src={comp}
                    alt="soccer"
                    style={{ height: 100, width: 100 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-section">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 ">
              <div className="d-flex h-100 align-items-center justify-content-center">
                <h3 className="fw-bold text1">Who we are</h3>
              </div>
            </div>
            <div className="col-md-8">
              <div className="position-relative d-flexs justify-content-centers align-items-center">
                <div className="row">
                  <div className="position-relative">
                    <div
                      className="be1 position-absolute"
                      style={{
                        borderLeft: "4px dotted orange",
                        borderBottom: "4px dotted orange",
                        height: 80,
                        width: 80,
                        bottom: -30,
                        left: 110,
                      }}
                    ></div>
                    <div
                      className="be2 position-absolute"
                      style={{
                        borderLeft: "4px dotted orange",
                        borderBottom: "4px dotted orange",
                        height: 70,
                        width: 70,
                        bottom: -20,
                        left: 120,
                      }}
                    ></div>
                    <div
                      className="be3 position-absolute"
                      style={{
                        borderRight: "4px dotted orange",
                        borderTop: "4px dotted orange",
                        height: 80,
                        width: 80,
                        top: -30,
                        right: 110,
                      }}
                    ></div>
                    <div
                      className="be4 position-absolute"
                      style={{
                        borderRight: "4px dotted orange",
                        borderTop: "4px dotted orange",
                        height: 70,
                        width: 70,
                        top: -20,
                        right: 120,
                      }}
                    ></div>

                    <div className="col-md-8 mx-auto">
                      <div className="mission bg-white rounded text-center py-3 shadow1">
                        <p className="text-uppercase">our mission</p>
                        <p>
                          To provide a platform where users can si,ultaneously
                          learn and earn.
                        </p>
                        <p className="text-uppercase">our vision</p>
                        <p>
                          We envision a world where free time and relaxation
                          arefully optimised through trivial to benefit everyone
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section bg2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="img-circle d-flex align-items-center justify-content-center h-100">
                <img
                  className="rounded-circle"
                  src={comp}
                  alt=""
                  style={{ height: 300, width: 310, objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-md-7 mt-4 my-md-0 ">
              <h3 className="text-uppercase fw-bold text1">about nimblish</h3>
              <p className="text-white" style={{ fontSize: 13 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit, nulla! Aliquid, quae cumque iusto alias minus rerum
                architecto repudiandae provident non, libero odit numquam enim
                officia itaque. Doloribus, aliquid! Asperiores possimus eos
                quibusdam quae eius similique, et earum facere molestiae
                explicabo corporis ullam alias, cum magni esse nulla, deleniti
                quidem doloribus?
              </p>
              <div className="text-white">
                <p>Get started in four simple steps</p>
                <ul style={{ fontSize: 13 }}>
                  <li>Create an account</li>
                  <li>Load wallet</li>
                  <li>Answer trivial quizzes</li>
                  <li>earn fantastic rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-section py-5">
        <h3 className="text-center fw-bold">How does Nimblish work?</h3>
        <div className="work container">
          <div className="row">
            <div className="col-md-4">
              <div className="shadow1 p-2">
                <div className="my-5"></div>
                <hr />
                <p className="fw-bold text-center">Create</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  nam porro reprehenderit!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-2 shadow1">
                <div className="my-5"></div>
                <hr />
                <p className="fw-bold text-center">Create</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  nam porro reprehenderit!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-2 shadow1">
                <div className="my-5"></div>
                <hr />
                <p className="fw-bold text-center">Create</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  nam porro reprehenderit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-section bg4">
        <h3 className="fw-bold text1 container">What People Say About Us</h3>
        <div>
          <div className="row">
            <div className="col-md-4 py-2 px-5">
              <div className="d-flex ms-md-5 bg-white shadow rounded pt-2 px-2">
                <div
                  className="bg-info rounded-circle"
                  style={{ height: 30, width: 30 }}
                >
                  <img
                    className="rounded-circle"
                    src={logo}
                    alt=""
                    style={{ height: 40, width: 40 }}
                  />
                </div>
                <div className="ms-2">
                  <p style={{ lineHeight: 0.9 }}>
                    Sarah leah <br />{" "}
                    <span className="" style={{ fontSize: 11 }}>
                      @Sarahleah
                    </span>
                  </p>
                  <p style={{ fontSize: 12 }}>
                    Numblish is one of the best places to safety get reward for
                    your knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-2 px-5">
              <div className="d-flex ms-md-5 shadow rev2 rounded pt-2 px-2">
                <div
                  className="bg-info rounded-circle"
                  style={{ height: 30, width: 30 }}
                >
                  <img
                    className="rounded-circle"
                    src={logo}
                    alt=""
                    style={{ height: 40, width: 40 }}
                  />
                </div>
                <div className="ms-2">
                  <p style={{ lineHeight: 0.9 }}>
                    Sarah leah <br />{" "}
                    <span className="" style={{ fontSize: 11 }}>
                      @Sarahleah
                    </span>
                  </p>
                  <p style={{ fontSize: 12 }}>
                    Numblish is one of the best places to safety get reward for
                    your knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-2 px-5  text-white">
              <div className="d-flex ms-md-5 shadow rev1 rounded pt-2 px-2">
                <div
                  className="bg-info rounded-circle"
                  style={{ height: 30, width: 30 }}
                >
                  <img
                    className="rounded-circle"
                    src={logo}
                    alt=""
                    style={{ height: 40, width: 40 }}
                  />
                </div>
                <div className="ms-2">
                  <p style={{ lineHeight: 0.9 }}>
                    Sarah leah <br />{" "}
                    <span className="" style={{ fontSize: 11 }}>
                      @Sarahleah
                    </span>
                  </p>
                  <p style={{ fontSize: 12 }}>
                    Numblish is one of the best places to safety get reward for
                    your knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="signup-section">
        <div className="container py-5">
          <div className="shadow p-3 rounded">
            <div className="row position-relative">
              <div className="col-md-6">
                <h4>Signup for free.</h4>
                <h4>Play Trivia</h4>
                <h4>Start earning today.</h4>
                <button className="btn bg1 text-white font1 py-2 px-3 mt-2">
                  Get Started
                </button>
              </div>

              <div className="col-md-6">
                <div
                  className="overflow-hidden position-relative"
                  style={{ height: 150 }}
                >
                  <div
                    className="blue-circle bg-primary rounded-circle position-absolute"
                    style={{ top: 10, height: 10, width: 10, left: 100 }}
                  ></div>
                  <div
                    className="yellow-circle bg-warning rounded-circle position-absolute"
                    style={{ top: 10, height: 20, width: 20, right: 100 }}
                  ></div>
                  <div
                    className="c rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      height: 200,
                      width: 200,
                      marginTop: 30,
                      marginLeft: 200,
                      border: "1px solid orange",
                    }}
                  >
                    <div
                      className="a rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        height: 160,
                        width: 160,
                        border: "1px solid orange",
                      }}
                    >
                      <div
                        className="b rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          height: 120,
                          width: 120,
                          border: "1px solid orange",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
      <section className="footer-section">
        <div className="py-5 container">
          <div className="row">
            <div className="col-md-3 text-white">
              <div className="text-capitalize mb-2" style={{ fontWeight: 600 }}>
                company
              </div>
              <div className="text-capitalize">
                <ul className="list-unstyled">
                  <li>home</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 text-white">
              <div className="text-capitalize mb-2" style={{ fontWeight: 600 }}>
                Support
              </div>
              <div>
                <ul className="list-unstyled">
                  <li>Help Center</li>
                  <li>FAQ'S</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 text-white">
              <div className="text-uppercase fw-bold mb-2">Legal</div>
              <div>
                <ul className="list-unstyled">
                  <li>Private Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-capitalize text-white fw-bold mb-2">
                Kindly:
              </div>
              <div>
                <button className="btn btn1 w-100 bg1 text-white font1 py-2 px-3 text-uppercase">
                  <i class="fa fa-clipboard  me-1" aria-hidden="true"></i>
                  schedule consultarion
                </button>
                <button className="btn w-100 btn2 outline1 mt-3 text-white font1 py-2 px-3 text-uppercase">
                  <i class="fa fa-phone  me-1" aria-hidden="true"></i>
                  contact us
                </button>
              </div>
            </div>
          </div>
          <div className="rights mt-4 mt-md-0">
            <div className="d-flex justify-content-between align-items-center">
              <div className="left font2 text-white">
                &copy; <span>All rights reserved</span>
              </div>
              <div className="d-flex icons align-items-center">
                <div className="linkedin d-flex align-items-center justify-content-center">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
                <div className="instagram d-flex mx-3 align-items-center justify-content-center">
                  <i class="fa fa-instagram " aria-hidden="true"></i>
                </div>
                <div className="twitter d-flex align-items-center justify-content-center">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nimbish;
