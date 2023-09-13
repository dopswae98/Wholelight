import React from "react";
import "./steelcraft.css";
import logo from "../img/steelcraftlogo.png";
import logo2 from "../img/steelcraftlogo2.png";
import warehouse from "../img/office2.jpg";
import CertSlider from "../Components/CertSlider";
import product1 from "../img/irrigation2.jpg";
import product2 from "../img/irrigation1.jpg";
import product3 from "../img/irrigation2.jpg";

const SteelCraft = () => {
  return (
    <div className="overflow-hidden">
      <section className="homepage-section">
        <div className="nav-section">
          <nav
            class="navbar navbar-expand-md navbar-dark bg-themes bg-dark bg-opacity-25"
            aria-label="Fourth navbar example"
          >
            <div class="container">
              <a class="navbar-brand d-flex" href="/#">
                <img src={logo2} alt="logo" />
                <span className="text-colors fw-bold">SteelCraft Ent.</span>
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
                  class="navbar-nav ms-auto mb-2 mb-md-0 me-5"
                  style={{ fontSize: 13 }}
                >
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/#">
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
                <form>
                  <button
                    className="connect-wallet btn btn-outline-info bg1 rounded text-color fw-bold"
                    style={{ fontSize: 12 }}
                  >
                    CONTACT US
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="hero pt-5 pb-5 mt-5">
            <h1
              className="fw-bold text-uppercase text-white"
              style={{ zIndex: 2000 }}
            >
              SteelCraft Enterprises <br />
              your trusted patner
            </h1>
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Sapiente modi, quidem ratione nam iusto ex doloribus quas!
            </p>
            <button className="btn bg1 px-5 rounded-pill text-white fw-bold text-uppercase">
              Findout more
            </button>
          </div>
        </div>
      </section>
      <section className="products-section bg-light">
        <div className="py-md-5 py-4 container">
          <h3 className="text-uppercase fw-bold">product range</h3>
          <div className="row">
            <div className="col-md-4 rounded p-3 ">
              <div className="d-flex bg-white pt-2">
                <img
                  className="prod-img me-5 me-md-3"
                  src={product1}
                  alt="materials"
                />
                <span className="fw-bold ms-5">
                  Materials <br />
                  <span className="text-muted">
                    View
                    <i
                      class="fa fa-arrow-right ms-1 text-muted"
                      aria-hidden="true"
                    ></i>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-md-4 rounded p-3">
              <div className="d-flex bg-white pt-2">
                <img
                  className="prod-img me-5 me-md-3"
                  src={product2}
                  alt="materials"
                />
                <span className="fw-bold ms-5">
                  Materials <br />
                  <span className="text-muted">
                    View
                    <i
                      class="fa fa-arrow-right ms-1 text-muted"
                      aria-hidden="true"
                    ></i>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-md-4 rounded p-3 ">
              <div className="d-flex bg-white pt-2">
                <img
                  className="prod-img me-5 me-md-3"
                  src={product3}
                  alt="materials"
                />
                <span className="fw-bold ms-5">
                  Materials <br />
                  <span className="text-muted">
                    View
                    <i
                      class="fa fa-arrow-right ms-1 text-muted"
                      aria-hidden="true"
                    ></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-section">
        <div className="mb-5 position-relative">
          <div className="row overflow-hidden" style={{ height: 390 }}>
            <div className="col-md-6 bg1 py-5">
              <div className="container px-md-5">
                <h3 className="fw-bold px-4 text-white text-uppercase">
                  sc vastum transcom srl
                </h3>
                <p className="text-white px-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas ad, libero vero magnam ratione voluptatibus mollitia
                  asperiores repellendus molestiae, exercitationem maxime
                  debitis corrupti incidunt omnis voluptatum nostrum natus in
                  aperiam. Inventore asperiores praesentium soluta nam alias?
                  Corporis delectus inventore modi nulla.
                </p>
              </div>
            </div>
            <div
              className="col-md-6  px-0 overflow-hidden"
              style={{ overflow: "hidden" }}
            >
              <img
                className="img-fluid"
                src={warehouse}
                alt="logo"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div
            className="container position-absolute mx-auto"
            style={{ bottom: -40, right: 0, left: 0 }}
          >
            <div className="d-md-flex justify-content-between flex-md-row flex-column d-md-block d-none">
              <div className="py-3 px-4 bg-white shadow1 rounded">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="me-2">
                    <i
                      class="fa fa-thumbs-up fs-2 text2"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <span className="" style={{ lineHeight: 1.2 }}>
                    Experince <br />
                    <span style={{ fontSize: 11 }}>25 years of activity</span>
                  </span>
                </div>
              </div>
              <div>
                <div className="py-3 px-4 bg-white shadow1 rounded">
                  <div className="d-flex  align-items-center justify-content-center">
                    <div className="me-2">
                      <i class="fa fa-group fs-2 text2" aria-hidden="true"></i>
                    </div>
                    <span className="" style={{ lineHeight: 1.2 }}>
                      Team <br />
                      <span style={{ fontSize: 11 }}>
                        Professional in the industry
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="py-3 px-4 bg-white shadow1 rounded">
                  <div className="d-flex  align-items-center justify-content-center">
                    <div className="me-2">
                      <i class="fa fa-cog fs-2 text2" aria-hidden="true"></i>
                    </div>
                    <span className="" style={{ lineHeight: 1.2 }}>
                      State of the art <br />
                      <span style={{ fontSize: 11 }}>equipment</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="certifications-section">
        <div className="py-md-5 pb-5 container">
          <h3 className="text-uppercase fw-bold text2">
            certifications & authorizations
          </h3>
          <p>
            Because we are a transparent company, which puts price on quality,
            we show <br /> you a series of certificates we obtained.
          </p>
          <CertSlider />
        </div>
      </section>
      <section className="gallery-section py-3 py-md-5 bg-light">
        <div className="container">
          <h3 className="fw-bold text2 text-uppercase">Gallery</h3>
          <div className="row">
            <div className="col-md-4 p-3">
              <img
                className="img-fluid rounded"
                src={warehouse}
                alt="picture1"
              />
            </div>
            <div className="col-md-4 p-3">
              <img
                className="img-fluid rounded"
                src={warehouse}
                alt="picture1"
              />
            </div>
            <div className="col-md-4 p-3">
              <img
                className="img-fluid rounded"
                src={warehouse}
                alt="picture1"
              />
            </div>
            <div className="col-md-4 p-3">
              <img
                className="img-fluid rounded"
                src={warehouse}
                alt="picture1"
              />
            </div>
            <div className="col-md-4 p-3">
              <img
                className="img-fluid rounded"
                src={warehouse}
                alt="picture1"
              />
            </div>
            <div className="col-md-4 p-3">
              <img
                className="img-fluid rounded"
                src={warehouse}
                alt="picture1"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section bg-info bg-opacity-25">
        <div className="py-5 container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex d-md-block justify-content-center">
                    <img
                      src={logo}
                      className=""
                      alt="metal"
                      style={{ height: 150, width: 150 }}
                    />
                  </div>
                </div>
                <div className="col-md-6 text-center text-md-start">
                  <h3 className="text-uppercase fw-bold">
                    do you want <br />{" "}
                    <span className="text2">a personalized offer</span> <br />{" "}
                    for your business?
                  </h3>
                  <button className="btn text-white bg1 text-uppercase rounded-pill px-5 fw-bold">
                    contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section bg-light">
        <div className="py-5 container">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="Logo" style={{ height: 70, width: 70 }} />
              <p className="pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores molestias dolorem iure cumque quaerat velit adipisci
                ipsa odit eum minima.
              </p>
            </div>
            <div className="col-md-3">
              <div className="text-uppercase fw-bold text2 mb-2">company</div>
              <div>
                <ul className="list-unstyled">
                  <li>About us</li>
                  <li>Certifications</li>
                  <li>Products</li>
                  <li>Data Protection</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-uppercase text2 fw-bold mb-2">company</div>
              <div>
                <ul className="list-unstyled">
                  <li>Materials</li>
                  <li>Pipes and tubes</li>
                  <li>Flanges</li>
                  <li>Fittings</li>
                  <li>Valves</li>

                  <li>Round Bars</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-uppercase fw-bold text2 mb-2">
                contact info
              </div>
              <div>
                <ul className="list-unstyled">
                  <li className="d-flex">
                    <i
                      class="fa fa-map-marker text2 me-2"
                      aria-hidden="true"
                    ></i>
                    <span>
                      Maraseti 331 A Street, 100238, Ploiesti, Prahova, Romania
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-envelope text2 me-2" aria-hidden="true"></i>
                    <span>
                      <a
                        className="unstyled-link"
                        href="mailto:office@steelcraft.com"
                      >
                        office@steelcraft.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-phone text2 me-2" aria-hidden="true"></i>
                    <span>
                      <a className="unstyled-link" href="tel:+263774444555">
                        +263774444555
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="copywrite my-3 container text2 fw-bold">
        <span className="text2 text-bold">&copy;</span> SteelCraft All rights
        reserved
      </section>
    </div>
  );
};

export default SteelCraft;
