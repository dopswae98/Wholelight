import React from "react";
import img1 from "../assets/images/arm-chair-01.jpg";
import img2 from "../assets/images/double-sofa-01.png";
import office from "../img/office1.jpg";
import SimpleSlider from "../Components/SimpleSlider";

const HomDecor = () => {
  return (
    <div>
      <section className="nav-section">
        <div>
          <nav
            class="navbar navbar-expand-md navbar-light bg-light"
            aria-label="Fourth navbar example"
          >
            <div class="container">
              {/* <a class="navbar-brand" href="/#">
                Expand at md
              </a> */}
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
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                  <li class="nav-item">
                    <a
                      class="nav-link active fw-bold"
                      aria-current="page"
                      href="/#"
                    >
                      HOME
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active fw-bold"
                      aria-current="page"
                      href="/#"
                    >
                      SHOP
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active fw-bold"
                      aria-current="page"
                      href="/#"
                    >
                      PAGE
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link active fw-bold"
                      aria-current="page"
                      href="/#"
                    >
                      ELEMENTS
                    </a>
                  </li>
                </ul>
                <div me-auto>
                  <p className="text-dark fs-5 my-auto fw-bold">Hom</p>
                </div>
                <div className="ms-auto">
                  <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                      <a
                        class="nav-link active fw-bold"
                        aria-current="page"
                        href="/#"
                      >
                        CART <span className="text-muted">($0)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active fw-bold"
                        aria-current="page"
                        href="/#"
                      >
                        <i class="fa fa-heart-o fw-bold" aria-hidden="true"></i>
                        <span className="text-muted">($0)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active fw-bold"
                        aria-current="page"
                        href="/#"
                      >
                        <i class="fa fa-user-o me-1" aria-hidden="true"></i>
                        <span>LOGIN</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active fw-bold"
                        aria-current="page"
                        href="/#"
                      >
                        <i class="fa fa-search mx-2" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link active fw-bold"
                        aria-current="page"
                        href="/#"
                      >
                        <i class="fa fa-bars" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section className="hero-section">
        <div className="container bg-secondary vh-75 rounded">
          <div className="d-flex align-center justify-content-around">
            <div className="d-flex align-items-end">
              <div>
                <h4 className="fw-bold">THINK DIFFERENT</h4>
                <p className="w-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi.
                </p>
              </div>
            </div>
            <div>
              <img src={img2} alt="img1" style={{ height: 285, width: 390 }} />
            </div>
          </div>
        </div>
      </section>
      <section className="related-products container my-5 ">
        <div className="rows d-block d-md-flex flex-row">
          <div className="service text-center me-1 col-md-3 py-0 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
        </div>
      </section>
      <section className="related-products container my-5 ">
        <div className="rows d-block d-md-flex flex-row">
          <div className="service text-center me-1 col-md-3 py-0 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div
          className="header px-auto vh-50 d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url(${office})`,
            height: 400,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-white m-auto fw-bold text-uppercase text-centers ">
            about us
          </h2>
        </div>
        <div className="my-5 container">
          <div className="row">
            <div className="col-md-6">
              <div className="img">
                <img className="img-fluid" src={office} alt="" />
              </div>
            </div>
            <div className="col-md-6 px-4">
              <div className="buttons d-flex justify-content-between">
                <button className="btn px-5 btn-dark text-center fw-bold rounded-0">
                  ABOUT US
                </button>
                <button className="btn px-5 btn-outline-dark text-center fw-bold rounded-0">
                  SERVICES
                </button>
                <button className="btn px-5 btn-outline-dark text-center fw-bold rounded-0">
                  HISTORY
                </button>
              </div>
              <div className="desc">
                <p className="text-muted pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat magni aperiam deserunt asperiores est ipsa neque ad,
                  provident voluptate, doloremque explicabo doloribus, vero
                  perspiciatis non aliquid fuga. Quo vel molestias provident
                  eum! Odit quisquam dolor quia magni obcaecati voluptate l
                  asperiores perspiciatis ducimus beatae soluta nam, sapiente
                  sequi similique voluptates facere veniam culpa aut odio.
                  Nihil, voluptatum.
                </p>
                <p className="text-muted fw-bold">
                  LEARN MORE
                  <span>
                    <i class="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials">
            <SimpleSlider />
          </div>
        </div>
      </section>
      <section className="user-dashboard px-5">
        <div className="col-md-6 mx-auto">
          <div className="buttons d-flex justify-content-between">
            <button className="btn px-5 btn-dark text-center fw-bold rounded-0">
              LOGIN
            </button>
            <button className="btn px-5 btn-outline-dark text-center fw-bold rounded-0">
              REGISTER
            </button>
            <button className="btn px-5 btn-outline-dark text-center fw-bold rounded-0">
              CHANGE PASSWORD
            </button>
          </div>
          <form className="mt-3" action="/#">
            <input
              type="text"
              placeholder="change password"
              className="form-control rounded-0"
            />
            <button className="btn mt-3 w-100 px-5 btn-dark text-center fw-bold rounded-0">
              New Password
            </button>
          </form>
        </div>
      </section>
      <section className="contact-us container">
        <div className="row ">
          <p className="fw-bold text-uppercase">contact me</p>
          <div className="col-md-8 mx-auto">
            <form className="mt-3" action="/#">
              <span className="text-muted">Your Name (required)</span>
              <input
                type="text"
                // placeholder="change password"
                className="form-control rounded-0 mb-3"
              />
              <span className="text-muted">Your Email (required)</span>
              <input
                type="text"
                // placeholder="change password"
                className="form-control rounded-0 mb-3"
              />
              <span className="text-muted">Your name (required)</span>
              <input
                type="text"
                // placeholder="change password"
                className="form-control rounded-0 mb-3"
              />
              <span className="text-muted">Your name (required)</span>
              <textarea
                type="text"
                rows={5}
                // placeholder="change password"
                className="form-control rounded-0"
              />
              <button className="btn mt-3 w-100 px-5 btn-dark text-center fw-bold rounded-0">
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="sign-up container pt-5">
        <div className="row ">
          <p className="fw-bold fs-3 text-uppercase text-center">Sign Up</p>
          <div className="col-md-5 mx-auto">
            <form className="mt-3" action="/#">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control rounded-0 mb-3"
              />

              <input
                type="text"
                placeholder="Your Email"
                className="form-control rounded-0 mb-3"
              />

              <input
                type="password"
                placeholder="Password"
                className="form-control rounded-0 mb-3"
              />

              <input
                type="password"
                placeholder="confirm password"
                className="form-control rounded-0"
              />
              <span className="text-muted">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus{" "}
                <span className="text-dark fw-bold me-1">private policy</span>
                nesciunt fuga.
              </span>
              <button className="btn mt-1 w-100 px-5 btn-dark text-center fw-bold rounded-0">
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="shop container py-5">
        <div>
          <div className="row">
            <div className="col-md-2 d-md-block d-none">
              <p className="text-uppercase fw-bold">color</p>
              <div>
                <p className="text-muted">Artistic (15)</p>
                <p className="text-muted">Artistic (15)</p>
                <p className="text-muted">Artistic (15)</p>
                <p className="text-muted">Artistic (15)</p>
                <p className="text-muted">Artistic (15)</p>
              </div>

              <div className="material mt-5">
                <p className="text-uppercase fw-bold">Material</p>
                <div>
                  <p className="text-muted">Artistic (15)</p>
                  <p className="text-muted">Artistic (15)</p>
                  <p className="text-muted">Artistic (15)</p>
                  <p className="text-muted">Artistic (15)</p>
                  <p className="text-muted">Artistic (15)</p>
                </div>
              </div>
              <div className="price mt-5">
                <p className="text-uppercase fw-bold">price</p>
                <input
                  type="range"
                  min={0}
                  max={5}
                  step={0.5}
                  id="customRange3"
                  className="form-range"
                />
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-uppercase fw-bold">apply</span>
                  <span
                    className="text-uppercase text-muted"
                    style={{ fontSize: 13 }}
                  >
                    $10 - $460
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-10 bg-light p-2 rounded">
              <div className="top-text d-flex justify-content-between align-items-center">
                <p>Showing 1-12 of 102 results</p>
                <div>
                  <select
                    name=""
                    aria-label="Default select example"
                    id=""
                    className="form-select"
                  >
                    <option selected> Sort BY</option>
                    <option value={1}> Price</option>
                    <option value={1}> Price</option>
                    <option value={1}> Price</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-details">
        <div>
          <div className="row container mt-5 mx-auto">
            <div className="col-md-6 position-relative">
              <div className="position-absolute top-0 left-0 d-flex flex-column">
                <img src={img1} alt="img1" style={{ height: 85, width: 85 }} />
                <img src={img1} alt="img1" style={{ height: 85, width: 85 }} />
                <img src={img1} alt="img1" style={{ height: 85, width: 85 }} />
                <img src={img1} alt="img1" style={{ height: 85, width: 85 }} />
              </div>
              <div className="img d-flex align-items-center justify-content-center">
                <img
                  src={img1}
                  alt="img1"
                  style={{ height: 350, width: 350 }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <p className="text-uppercase fw-bold">marvelous modern 3</p>
              <div className="d-flex">
                <p className="text-secondary me-2">
                  <s>$750</s>
                </p>
                <p>$599</p>
              </div>
              <div className="customer-review">
                <div className="stars-line d-flex">
                  <div className="stars text-warning">
                    <span>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i class="fa fa-star mx-2" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i class="fa fa-star mx-2" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i
                        class="fa fa-star-half-empty me-2"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                  <p className="text-uppercase">customer review</p>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                  repudiandae ad perferendis quos rerum molestias, porro saepe.
                  Eos, recusandae. Recusandae, nam!
                </p>
              </div>
              <div className="buttons d-flex">
                <div className="bg-white px-2 border rounded-0 d-flex justify-content-between align-items-center">
                  <div>
                    <span className="text-dark me-5">Quantity</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <div>
                      <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    <div className="mx-3">
                      <span>1</span>
                    </div>
                    <div>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <button className="btn btn-dark rounded-0 d-flex justify-content-between align-items-center">
                  <div>
                    <span className="text-white fw-bold px-5">ADD TO CART</span>
                  </div>
                </button>
              </div>
              <i class="fa fa-heart-o me-2 mt-4" aria-hidden="true"></i>
              <span className="fw-bold text-uppercase">Add to wish list</span>
              <div className="sku mt-4">
                <span className="fw-bold">SKU:</span> <span>113</span> <br />
                <span className="fw-bold me-1">Category:</span>
                <span>Docoration, Home Decor</span> <br />
                <span className="fw-bold me-1">Tags:</span>
                <span>Docoration, Green</span>
              </div>
            </div>
          </div>
          <div className="border border-top-0 border-left-0 border-end-0">
            <div className="container pt-5">
              <div className="d-flex">
                <div className="bg-dark text-white py-2 px-4">Description</div>
                <div className="border border-secondary text-dark py-2 px-4 text-uppercase">
                  Additional Information
                </div>
                <div className="border border-secondary text-dark py-2 px-4 text-uppercase">
                  Reviews(10)
                </div>
              </div>
            </div>
          </div>
          <div className="description container">
            <p className="fw-bold text-uppercase mt-5">Description</p>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum
              illo beatae inventore molestiae vitae veniam at nam hic, iusto,
              modi dolorum eius tenetur incidunt magni! Asperiores tenetur illum
              id harum eligendi modi nulla? Laboriosam, accusamus modi illum
              reprehenderit reiciendis suscipit aliquid.
            </p>
          </div>
        </div>
      </section>
      <section className="related-products container my-5 ">
        <div className="rows d-block d-md-flex flex-row">
          <div className="service text-center me-1 col-md-3 py-0 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column">
            <p className="text-start">NEW</p>
            <div className="img">
              <img src={img1} alt="img1" style={{ height: 130, width: 130 }} />
            </div>
            <div style={{ lineHeight: 0.5 }}>
              <p className="fw-bold mt-3">Business Card</p>
              <p className="text-secondary">$160</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="footer bg-dark text-white pt-5"
        style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p className="fw-bold">Customer Service</p>
              <p className="text-muted">Help & Contacts Us</p>
              <p className="text-muted">Returns & Refunds</p>
              <p className="text-muted">Online Stores</p>
              <p className="text-muted">Terms & Conditions</p>
            </div>
            <div className="col-md-3">
              <p className="fw-bold">COMPANY</p>
              <p className="text-muted">What we do</p>
              <p className="text-muted">Available Services</p>
              <p className="text-muted">Latest Posts</p>
              <p className="text-muted">FAQ's</p>
            </div>
            <div className="col-md-3">
              <p className="fw-bold">SOCIAL MEDIA</p>
              <p className="text-muted">Twitter</p>
              <p className="text-muted">Instagram</p>
              <p className="text-muted">Tumblr</p>
              <p className="text-muted">Pintrest</p>
            </div>
            <div className="col-md-3">
              <p className="fw-bold">PROFILE</p>
              <p className="text-muted">My Account</p>
              <p className="text-muted">Checkout</p>
              <p className="text-muted">Order Tracing</p>
              <p className="text-muted">Help & Support</p>
            </div>
          </div>
        </div>
        <div
          className="copyright py-2 border border-secondary"
          style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        >
          <div className="container d-flex justify-content-between align-items-center py-2">
            <div>
              <i
                className="fa fa-copyright text-muted me-2"
                aria-hidden="true"
              ></i>
              <span className="text-muted">
                Copyright 2023. All rights reserved by Ephraim Matarutse
              </span>
            </div>
            <div className="d-flex text-muted">
              <div className="me-3">Follow Us</div>
              <div className="icons">
                <i class="fa fa-twitter me-4" aria-hidden="true"></i>
                <i class="fa fa-instagram me-4" aria-hidden="true"></i>
                <i class="fa fa-linkedin me-4" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomDecor;
