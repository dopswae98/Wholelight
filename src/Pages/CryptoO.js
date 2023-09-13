import React from "react";
import "./crypto.css";
import office from "../img/office3.jpg";
import SimpleSlider from "../Components/SimpleSliderBitcoin";
import SimpleSlider1 from "../Components/SimpleSliderBitcoin1";

const CryptoO = () => {
  return (
    <div className="w-100 crypto">
      <section className="nav-section">
        <nav
          class="navbar navbar-expand-md navbar-dark bg-theme"
          aria-label="Fourth navbar example"
        >
          <div class="container">
            <a class="navbar-brand d-flex" href="/#">
              <i
                class="fa fa-bitcoin grad-text fs-3 me-1"
                aria-hidden="true"
              ></i>
              <span className="text-color fw-bold">CryptoO.</span>
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
                    My Exchanges
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Currencies
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    All Products
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    FAQ's
                  </a>
                </li>
              </ul>
              <form>
                <button
                  className="connect-wallet btn btn-outline-info rounded text-color fw-bold"
                  style={{ fontSize: 12 }}
                >
                  Connect Wallet
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
      <section className="hero-section my-5">
        <div className="container" style={{ fontSize: 15 }}>
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-color">
                A trusted and <br /> secure{" "}
                <span className="grad-text2">bitcoin</span> and <br />
                <span className="grad-text2">crypto</span> exchange.
              </h1>
              <button className="btn grad-button mt-4">Get Started</button>
            </div>
            <div className="col-md-6 boxs">
              <div className="circle text-center mx-auto">
                <h1 className="fw-bold">
                  <i class="fa fa-bitcoin grad-text3" aria-hidden="true"></i>
                </h1>
              </div>
            </div>
          </div>
          <div className="row my-4 mt-5 pt-4">
            <div className="col-md-4">
              <div className="d-flex align-items-start justify-content-center">
                <div className="icon-container border px-3 rounded py-1 mt-2">
                  <i class="fa fa-shield grad-text2" aria-hidden="true"></i>
                </div>
                <div className="ms-2">
                  <p className="fw-bold text-color">
                    Limitless, custody-free <br /> cryptocurrency exchange
                  </p>
                  <p className="text-muted pe-5">
                    We do have maximum limits, which allows everyone to exchange
                    any amount of crypto currencies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-start justify-content-center">
                <div className="icon-container border px-3 rounded py-1 mt-2">
                  <i class="fa fa-shield grad-text2" aria-hidden="true"></i>
                </div>
                <div className="ms-2">
                  <p className="fw-bold text-color">
                    Limitless, custody-free <br /> cryptocurrency exchange
                  </p>
                  <p className="text-muted pe-5">
                    We do have maximum limits, which allows everyone to exchange
                    any amount of crypto currencies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-start justify-content-center">
                <div className="icon-container border px-3 rounded py-1 mt-2">
                  <i class="fa fa-shield grad-text2" aria-hidden="true"></i>
                </div>
                <div className="ms-2">
                  <p className="fw-bold text-color">
                    Limitless, custody-free <br /> cryptocurrency exchange
                  </p>
                  <p className="text-muted pe-5">
                    We do have maximum limits, which allows everyone to exchange
                    any amount of crypto currencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="table-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="fs-3 fw-bold text-color">
                Popular cryptocurrencies
              </p>
              <p className="text-muted pe-5">
                Buy and sell 250+ cryptocurrencies with 20+ flat currencies
                using bank transfer or your credit/debit card.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-items-end">
              <a href="/#" className="view-markets ms-auto">
                View more markets
                <span className="view-markets">
                  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </span>
              </a>
            </div>
            <div className="table-show boxs">
              <div class="bd-example-snippet bd-code-snippet">
                <div class="bd-example">
                  <table class="table table-stripeds text-color">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Price</th>
                        <th scope="col">24hr %</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Last 7 days</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        className="justify-content-center"
                        style={{ fontSize: 15 }}
                      >
                        <th scope="row">
                          <div className="my-1">
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                          </div>
                        </th>
                        <th scope="row">
                          <div className="my-1">1</div>
                        </th>
                        <td className=" align-items-center">
                          <div className="d-flex align-items-center justify-content-centers my-1">
                            <img
                              src={office}
                              alt=""
                              style={{
                                height: 18,
                                width: 18,
                                borderRadius: 9,
                              }}
                            />
                            <span className="mx-2">Bitcoin</span>
                            <span
                              className="text-muted text-uppercase"
                              style={{ fontSize: 11 }}
                            >
                              BTC
                            </span>
                          </div>
                        </td>
                        <td>$15,948.80</td>
                        <td className="text-warning">-1.87%</td>
                        <td>$319,948,000.00</td>
                        <td>graph</td>
                        <td>
                          <span
                            className="trade border rounded-pill py-1 px-2"
                            style={{ fontSize: 11 }}
                          >
                            Trade
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-about my-5">
        <div className="">
          <div class="bd-example-snippet bd-code-snippet">
            <div class="bd-example">
              <table class="table table-sm table-bordered text-center ">
                <thead>
                  <tr>
                    <th style={{ width: "20%" }} scope="row"></th>
                    <td className="text-color fw-bold" colspan="2">
                      About The Project
                    </td>
                    <td style={{ width: "20%" }}></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      scope="row bg-warning h-100"
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="d-flex py-auto align-items-center justify-content-center"
                        style={{
                          height: "100%",
                          width: "100%",
                          transform: "rotate(-15deg)",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          className=""
                          src={office}
                          style={{
                            height: 100,
                            marginTop: "50%",
                          }}
                          alt=""
                        />
                      </div>
                    </th>
                    <td colspan="2">
                      <p className="text-muted text-start px-2 py-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque facere fuga non unde! Exercitationem ex
                        soluta, modi debitis quaerat dolorem. Reprehenderit
                        perferendis praesentium aperiam nemo est expedita,
                        officiis adipisci nobis? Aut ea eum dolorum velit?
                        perferendis praesentium aperiam nemo est expedita,
                        officiis adipisci nobis? Aut ea eum dolorum velit?
                      </p>
                      <p className="text-muted text-start px-2 py-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque facere fuga non unde! Exercitationem ex
                        soluta, modi debitis quaerat dolorem. Reprehenderit
                        perferendis praesentium aperiam nemo est expedita,
                        officiis adipisci nobis? Aut ea eum dolorum velit?
                        soluta, modi debitis quaerat dolorem. Reprehenderit
                        perferendis praesentium aperiam nemo est expedita,
                        officiis adipisci nobis? Aut ea eum dolorum velit?
                      </p>
                    </td>
                    <td style={{ overflow: "hidden" }}>
                      <div
                        className="d-flex py-auto align-items-center justify-content-center"
                        style={{
                          height: "100%",
                          width: "100%",
                          transform: "rotate(-15deg)",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          className=""
                          src={office}
                          style={{ height: 100, marginTop: "50%" }}
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td className="text-color fw-bold" colspan="2">
                      Crypto Exchange & Calculator
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-section">
        <div className="container">
          <div className="latest-header d-flex justify-content-between">
            <h5 className="fw-bold text-color">Latest Posts</h5>
            <div>
              <button
                className="btn btn-outline-info text-color grad-border rounded"
                style={{ fontSize: 13 }}
              >
                View More
              </button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 rounded">
              <div className="bit-image p-1 border-alt rounded text-color">
                <img
                  className="rounded "
                  src={office}
                  alt=""
                  style={{ objectFit: "cover", height: 200, width: "100%" }}
                />
                <p className="text-muted mt-2" style={{ fontSize: 11 }}>
                  Hassan Shafiq . August 16,2021
                </p>
                <hr style={{ marginTop: -9 }} />
                <p className="text-muted  text-color" style={{ fontSize: 15 }}>
                  <span
                    className="text-muted fw-bold text-color"
                    style={{ fontSize: 15 }}
                  >
                    Cream Finance Hacked....Again: Crypto News Recap, Aug.30{" "}
                  </span>
                  <br />
                  <span className="text-muted" style={{ fontSize: 13 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, quisquam! Molestias natus veniam tempora, dolorum
                    fugit maxime eligendi perferendis optio consectetur, aut qui
                    enim sequi.
                  </span>
                </p>
                <p className="fw-bold grad-text2" style={{ fontSize: 12 }}>
                  Read more
                  <i class="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bit-image p-1 border-alt rounded text-color">
                <div
                  className="d-flex"
                  style={{ height: 110, overflow: "hidden" }}
                >
                  <img
                    className="rounded "
                    src={office}
                    alt=""
                    style={{ objectFit: "cover", height: 110, width: "30%" }}
                  />
                  <div className="ms-2">
                    <p className="text-muted mt-2" style={{ fontSize: 11 }}>
                      Hassan Shafiq . August 16,2021
                    </p>
                    <hr style={{ marginTop: -9 }} />
                    <p
                      className="text-muted  text-color"
                      style={{ fontSize: 15, marginTop: -14, lineHeight: 1.2 }}
                    >
                      <span
                        className="text-muted fw-bold text-color"
                        style={{ fontSize: 13 }}
                      >
                        Cream Finance Hacked....Again: Crypto News Recap, Aug.30{" "}
                      </span>
                      <br />
                      <span className="text-muted" style={{ fontSize: 11 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt, quisquam! Molestias natus veniam tempora,
                        dolorum fugi
                      </span>
                    </p>
                    <div className="d-flex">
                      <p
                        className="fw-bold grad-text2"
                        style={{ fontSize: 12, marginTop: -14 }}
                      >
                        Read more
                        <i
                          class="fa fa-arrow-right ms-2"
                          aria-hidden="true"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bit-image p-1 mt-3 border-alt rounded text-color">
                <div
                  className="d-flex"
                  style={{ height: 110, overflow: "hidden" }}
                >
                  <img
                    className="rounded "
                    src={office}
                    alt=""
                    style={{ objectFit: "cover", height: 110, width: "30%" }}
                  />
                  <div className="ms-2">
                    <p className="text-muted mt-2" style={{ fontSize: 11 }}>
                      Hassan Shafiq . August 16,2021
                    </p>
                    <hr style={{ marginTop: -9 }} />
                    <p
                      className="text-muted  text-color"
                      style={{ fontSize: 15, marginTop: -14, lineHeight: 1.2 }}
                    >
                      <span
                        className="text-muted fw-bold text-color"
                        style={{ fontSize: 13 }}
                      >
                        Cream Finance Hacked....Again: Crypto News Recap, Aug.30{" "}
                      </span>
                      <br />
                      <span className="text-muted" style={{ fontSize: 11 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt, quisquam! Molestias natus veniam tempora,
                        dolorum fugi
                      </span>
                    </p>
                    <div className="d-flex">
                      <p
                        className="fw-bold grad-text2"
                        style={{ fontSize: 12, marginTop: -14 }}
                      >
                        Read more
                        <i
                          class="fa fa-arrow-right ms-2"
                          aria-hidden="true"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bit-image p-1 mt-3 border-alt rounded text-color">
                <div
                  className="d-flex"
                  style={{ height: 110, overflow: "hidden" }}
                >
                  <img
                    className="rounded "
                    src={office}
                    alt=""
                    style={{ objectFit: "cover", height: 110, width: "30%" }}
                  />
                  <div className="ms-2">
                    <p className="text-muted mt-2" style={{ fontSize: 11 }}>
                      Hassan Shafiq . August 16,2021
                    </p>
                    <hr style={{ marginTop: -9 }} />
                    <p
                      className="text-muted  text-color"
                      style={{ fontSize: 15, marginTop: -14, lineHeight: 1.2 }}
                    >
                      <span
                        className="text-muted fw-bold text-color"
                        style={{ fontSize: 13 }}
                      >
                        Cream Finance Hacked....Again: Crypto News Recap, Aug.30{" "}
                      </span>
                      <br />
                      <span className="text-muted" style={{ fontSize: 11 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt, quisquam! Molestias natus veniam tempora,
                        dolorum fugi
                      </span>
                    </p>
                    <div className="d-flex">
                      <p
                        className="fw-bold grad-text2"
                        style={{ fontSize: 12, marginTop: -14 }}
                      >
                        Read more
                        <i
                          class="fa fa-arrow-right ms-2"
                          aria-hidden="true"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="member-section">
        <div className="container">
          <h4 className="fw-bold text-color my-3">Team Members</h4>
          <div className="row text-color" style={{ fontSize: 14 }}>
            <div className="col-md-3">
              <div className="img position-relative">
                <div className="img-card">
                  <img
                    className="img-fluid rounded"
                    src={office}
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <div className="social-member rounded-pill px-2 py-1 ms-2 grad-button text-dark">
                    <i
                      class="fa fa-linkedin-square bg-transparent"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa fa-twitter mx-3 bg-transparent"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa fa-globe bg-transparent"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div className="pt-2" style={{ lineHeight: 0.1 }}>
                  <p className="fw-bold mt-2">Monica Taylor</p>
                  <p className="mt-2 text-muted" style={{ fontSize: 12 }}>
                    CTO Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img">
                <img
                  className="img-fluid rounded"
                  src={office}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="pt-2" style={{ lineHeight: 0.1 }}>
                  <p className="fw-bold mt-2">Monica Taylor</p>
                  <p className="mt-2 text-muted" style={{ fontSize: 12 }}>
                    CTO Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img">
                <img
                  className="img-fluid rounded"
                  src={office}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="pt-2" style={{ lineHeight: 0.1 }}>
                  <p className="fw-bold mt-2">Monica Taylor</p>
                  <p className="mt-2 text-muted" style={{ fontSize: 12 }}>
                    CTO Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img">
                <img
                  className="img-fluid rounded"
                  src={office}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="pt-2" style={{ lineHeight: 0.1 }}>
                  <p className="fw-bold mt-2">Monica Taylor</p>
                  <p className="mt-2 text-muted" style={{ fontSize: 12 }}>
                    CTO Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 text-color" style={{ fontSize: 14 }}>
            <div className="col-md-3">
              <div className="img">
                <img
                  className="img-fluid rounded"
                  src={office}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="pt-2" style={{ lineHeight: 0.1 }}>
                  <p className="fw-bold mt-2">Monica Taylor</p>
                  <p className="mt-2 text-muted" style={{ fontSize: 12 }}>
                    CTO Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img">
                <img
                  className="img-fluid rounded"
                  src={office}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="pt-2" style={{ lineHeight: 0.1 }}>
                  <p className="fw-bold mt-2">Monica Taylor</p>
                  <p className="mt-2 text-muted" style={{ fontSize: 12 }}>
                    CTO Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img">
                <img
                  className="img-fluid rounded"
                  src={office}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="pt-2" style={{ lineHeight: 0.1 }}>
                  <p className="fw-bold mt-2">Monica Taylor</p>
                  <p className="mt-2 text-muted" style={{ fontSize: 12 }}>
                    CTO Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img">
                <img
                  className="img-fluid rounded"
                  src={office}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="pt-2" style={{ lineHeight: 0.1 }}>
                  <p className="fw-bold mt-2">Monica Taylor</p>
                  <p className="mt-2 text-muted" style={{ fontSize: 12 }}>
                    CTO Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-section">
        <div className="first" style={{ fontSize: 14 }}>
          <SimpleSlider />
          <SimpleSlider1 />
        </div>
      </section>
      <section className="faq-section my-5">
        <div className="container">
          <h3 className="text-center text-color fw-bold my-3">
            Frequently Asked Questions
          </h3>
          <div className="arccodion">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div>
                  <div class="bd-example-snippet bd-code-snippet">
                    <div class="bd-example">
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h4 class="accordion-header">
                            <button
                              class="accordion-button fw-bold text-color bg-theme"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Accordion Item #1
                            </button>
                          </h4>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body text-color">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h4 class="accordion-header">
                            <button
                              class="accordion-button collapsed text-color fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Accordion Item #2
                            </button>
                          </h4>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body text-color">
                              <strong>
                                This is the second item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h4 class="accordion-header">
                            <button
                              class="accordion-button collapsed text-color fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Accordion Item #2
                            </button>
                          </h4>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body text-color">
                              <strong>
                                This is the second item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h4 class="accordion-header">
                            <button
                              class="accordion-button collapsed text-color fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Accordion Item #2
                            </button>
                          </h4>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body text-color">
                              <strong>
                                This is the second item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h4 class="accordion-header">
                            <button
                              class="accordion-button collapsed text-color fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Accordion Item #3
                            </button>
                          </h4>
                          <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body text-color">
                              <strong>
                                This is the third item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-section py-3 boxs position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-6 fs-4">
              <i
                class="fa fa-bitcoin fs-1 fw-bold grad-text"
                aria-hidden="true"
              ></i>
              <span className="fw-bold ms-2 text-color">CryptoO.</span>
              <p className="text-muted fs-6 pe-5">
                Get started with the easiest and the most secure platform to
                buy, sell, trade and earn cryptocurrencies.
              </p>
            </div>
            <div className="col-md-6">
              <div className="social-media d-md-block d-flex flex-wrap">
                <a href="/#" className="rounded-pill px-3 py-1">
                  LinkedIn
                </a>
                <a href="/#" className="rounded-pill px-3 py-1 mx-2">
                  Twitter
                </a>
                <a href="/#" className="rounded-pill px-3 py-1">
                  Facebook
                </a>
                <a
                  href="/#"
                  className="rounded-pill px-3 mx-2 py-1 my-2 my-md-0"
                >
                  Instagram
                </a>
              </div>
            </div>
            <hr className="border" />
            <div className="d-flex justify-content-end">
              <p className="text-muted">
                &copy; Copyright 2021{" "}
                <span className="grad-text2">CryptoO</span> | All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoO;
