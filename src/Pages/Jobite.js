import React from "react";
import office from "../img/office1.jpg";
import "./jobit.css";

const Jobite = () => {
  return (
    <div className="w-100">
      <section className="navbar-section">
        <nav
          class="navbar navbar-expand-md navbar-light bg-white px-3"
          aria-label="Fourth navbar example"
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="/#">
              <i
                class="fa fa-circle-o-notch me-1 fw-bold text-primary"
                aria-hidden="true"
              ></i>
              <span className="fw-bold">JOBITE</span>
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

            <div class="collapse navbar-collapse ms-5" id="navbarsExample04">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item position-relative">
                  <a
                    class="nav-link active text-primary fw-bolder"
                    aria-current="page"
                    href="/#"
                  >
                    Find Job
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Company Application
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link "
                    href="/#"
                    tabindex="-1"
                    // aria-disabled="true"
                  >
                    Company Review
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center justify-content-center">
                <div className="flag">
                  <img
                    src={office}
                    alt="flag"
                    style={{ height: 30, width: 30, borderRadius: 15 }}
                  />
                </div>
                <div className="language ms-3 d-flex ">
                  <select
                    name=""
                    aria-label="Default select example"
                    id=""
                    className="form-select"
                    style={{ width: 68 }}
                  >
                    <option selected> EN </option>
                    <option value={1}> Shona</option>
                    <option value={2}> Ndebele</option>
                    <option value={3}> Zulu</option>
                  </select>
                </div>
                <div className="mx-3 position-relative">
                  <i
                    class="fa fa-circle text-danger position-absolute"
                    style={{ fontSize: 10, right: 0 }}
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-bell-o text-dark" aria-hidden="true"></i>
                </div>
                <div className="user position-relative border px-4 border-end-0 border-top-0 border-bottom-0 border-end-0">
                  <div
                    className=" bg-infos d-flex align-items-center justify-content-center fw-bold"
                    style={{
                      //   backgroundColor: "lightblue",
                      background:
                        "linear-gradient(-45deg, #9fccfa 65%, #00ff87 90%)",
                      width: 30,
                      filter: "blur(10px)",
                      height: 30,
                      borderRadius: 15,
                    }}
                  >
                    e
                  </div>
                  <p
                    className="text-dark text-center position-absolute fw-bold border border-info"
                    style={{
                      top: "-2%",
                      paddingTop: 2,
                      left: "32%",
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                    }}
                  >
                    E
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section className="content bg-light ">
        <div className="container">
          <div className="row gx-2 py-4">
            <div className="left-section col-md-3 bg-white p-2 rounded d-md-block d-none">
              <div className="filter d-flex justify-content-between align-items-center">
                <div className="fw-bold">Filter</div>
                <div className="text-muted" style={{ fontSize: 12 }}>
                  Clear all
                  <span>
                    <i class="fa fa-times-circle ms-1" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <p className="fw-bold">Location</p>
              <div className="language d-flex">
                <select
                  name=""
                  aria-label="Default select example"
                  id=""
                  className="form-select"
                >
                  <option selected>
                    <div className="">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    New York
                  </option>
                  <option value={1}>
                    Price
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </option>
                  <option value={2}> Harare</option>
                  <option value={3}> Mutare</option>
                </select>
              </div>
              <div className="availability mt-2">
                <p className="fw-bold">Availability</p>
                <div
                  className="form-check"
                  style={{ marginTop: -10, fontSize: 15 }}
                >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="flexCheckDefault"
                    checked
                  />
                  <label
                    htmlFor="flexCheckDefault"
                    className="form-check-label text-muted"
                  >
                    Freelance/Contract
                  </label>
                </div>
                <div className="form-check" style={{ fontSize: 15 }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    htmlFor="flexCheckDefault"
                    className="form-check-label text-muted"
                  >
                    Full Time
                  </label>
                </div>
                <p className="fw-bold mt-2">Jobs You Might Like</p>
                <div
                  className="form-check"
                  style={{ marginTop: -10, fontSize: 15 }}
                >
                  <input
                    type="radio"
                    className="form-check-input"
                    value=""
                    id="flexRadioDefault1"
                    checked
                  />
                  <label
                    htmlFor="flexRadioDefault1"
                    className="form-check-label text-muted"
                  >
                    Best Matches
                  </label>
                </div>
                <div className="form-check" style={{ fontSize: 15 }}>
                  <input
                    type="radio"
                    className="form-check-input"
                    value=""
                    id="flexRadioDefault2"
                  />
                  <label
                    htmlFor="flexRadioDefault2"
                    className="form-check-label text-muted"
                  >
                    Most Recent
                  </label>
                </div>
                <div className="form-check" style={{ fontSize: 15 }}>
                  <input
                    type="radio"
                    className="form-check-input"
                    value=""
                    id="flexRadioDefault3"
                  />
                  <label
                    htmlFor="flexRadioDefault3"
                    className="form-check-label text-muted"
                  >
                    Saved Jobs
                  </label>
                </div>
                <p className="fw-bold mt-2">Salary</p>

                <input
                  type="range"
                  className="form-range"
                  style={{ marginTop: -40 }}
                  min={0}
                  max={5}
                  step={0.5}
                />
                <div className="d-flex fw-bold justify-content-between align-items-center">
                  <p>$10</p>
                  <p>$3500</p>
                </div>
              </div>
              <p className="fw-bold">Availability</p>
              <div
                className="d-flex align-items-centers justify-content-between"
                style={{ marginTop: -10 }}
              >
                <div>
                  <div className="form-check" style={{ fontSize: 15 }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="flexCheckDefault"
                      checked
                    />
                    <label
                      htmlFor="flexCheckDefault"
                      className="form-check-label text-muted"
                    >
                      Ready Work
                    </label>
                  </div>
                </div>
                <div style={{ fontSize: 15 }}>2340</div>
              </div>
              <p className="fw-bold mt-2">Specialties</p>
              <div
                className="d-flex align-items-centers justify-content-between"
                style={{ marginTop: -10 }}
              >
                <div>
                  <div className="form-check" style={{ fontSize: 15 }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="flexCheckDefault"
                      checked
                    />
                    <label
                      htmlFor="flexCheckDefault"
                      className="form-check-label text-muted"
                    >
                      Graphic Designer
                    </label>
                  </div>
                </div>
                <div style={{ fontSize: 15 }}>42</div>
              </div>
              <div className="d-flex align-items-centers justify-content-between">
                <div>
                  <div className="form-check" style={{ fontSize: 15 }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="flexCheckDefault"
                      checked
                    />
                    <label
                      htmlFor="flexCheckDefault"
                      className="form-check-label text-muted"
                    >
                      UI Designer
                    </label>
                  </div>
                </div>
                <div style={{ fontSize: 15 }}>24</div>
              </div>
              <div className="d-flex align-items-centers justify-content-between">
                <div>
                  <div className="form-check" style={{ fontSize: 15 }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="flexCheckDefault"
                      checked
                    />
                    <label
                      htmlFor="flexCheckDefault"
                      className="form-check-label text-muted"
                    >
                      UX Designer
                    </label>
                  </div>
                </div>
                <div style={{ fontSize: 15 }}>22</div>
              </div>
              <div className="d-flex align-items-centers justify-content-between">
                <div>
                  <div className="form-check" style={{ fontSize: 15 }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="flexCheckDefault"
                      checked
                    />
                    <label
                      htmlFor="flexCheckDefault"
                      className="form-check-label text-muted"
                    >
                      Wix Designer
                    </label>
                  </div>
                </div>
                <div style={{ fontSize: 15 }}>40</div>
              </div>
              <div className="d-flex align-items-centers justify-content-between">
                <div>
                  <div className="form-check" style={{ fontSize: 15 }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="flexCheckDefault"
                      checked
                    />
                    <label
                      htmlFor="flexCheckDefault"
                      className="form-check-label text-muted"
                    >
                      Database Designer
                    </label>
                  </div>
                </div>
                <div style={{ fontSize: 15 }}>23</div>
              </div>
            </div>
            <div className="right-section col-md-8 bg-white p-1 ms-md-4 ms-0 rounded mb-2">
              <form action="" className="d-flex bg-light p-2 rounded">
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="Search by Title, Company or any Jobs keywords..."
                />
                <button className="btn btn-primary ms-2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-search me-1 fs-5" aria-hidden="true"></i> find
                </button>
              </form>
              <div className="jobs bg-light mt-2 rounded p-1">
                <div className="d-flex px-2 align-items-center justify-content-between">
                  <div className="company-logo d-flex align-items-center">
                    <img
                      src={office}
                      className="rounded"
                      alt=""
                      style={{ height: 40, width: 44, objectFit: "cover" }}
                    />
                    <div className="ms-2" style={{ lineHeight: 1.2 }}>
                      <div>
                        <span className="fw-bold">
                          Create Figma Designs for Web Applications.
                        </span>
                        <span
                          className="text-muted ms-1"
                          style={{ fontSize: 11 }}
                        >
                          2 hours ago
                        </span>
                      </div>
                      <div>
                        <span className="text-muted" style={{ fontSize: 11 }}>
                          Hourly: $100-$400 - Remote Friendly - Est. Time: 1 to
                          3 months
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex border p-2 rounded">
                    <i
                      class="fa fa-paperclip text-muted fw=bold mx-1"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <p
                  className="px-2 pt-2"
                  style={{ fontSize: 13, fontWeight: 700 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  totam sed distinctio itaque iusto qui repellendus, tenetur
                  suscipit! Rerum dolores libero architecto. Impedit, suscipit.
                </p>
                <div className="skills mx-2">
                  <div
                    className="d-flex text-muted flex-wrap"
                    style={{ fontSize: 13 }}
                  >
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      User Interface Design
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      User Experience
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      Styleguide
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      Prototyping
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      +3 more
                    </p>
                  </div>
                </div>
                <div className="verified px-2 d-flex align-items-center flex-wrap">
                  <i
                    class="fa fa-check-circle me-1 text-primary"
                    aria-hidden="true"
                  ></i>
                  <div className="text-muted" style={{ fontSize: 13 }}>
                    Payment Verified
                  </div>
                  <div className="stars ms-4 text-warning">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star mx-2" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star mx-2" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="location ms-md-3 ms-0 d-flex align-items-center text-muted">
                    <i class="fa fa-map-marker fw-bold" aria-hidden="true"></i>
                    <div className="ms-2" style={{ fontSize: 13 }}>
                      New York, Manhattam
                    </div>
                  </div>
                </div>
              </div>
              <div className="jobs bg-light mt-2 rounded p-1">
                <div className="d-flex px-2 align-items-center justify-content-between">
                  <div className="company-logo d-flex align-items-center">
                    <img
                      src={office}
                      className="rounded"
                      alt=""
                      style={{ height: 40, width: 44, objectFit: "cover" }}
                    />
                    <div className="ms-2" style={{ lineHeight: 1.2 }}>
                      <div>
                        <span className="fw-bold">
                          Create Figma Designs for Web Applications.
                        </span>
                        <span
                          className="text-muted ms-1"
                          style={{ fontSize: 11 }}
                        >
                          2 hours ago
                        </span>
                      </div>
                      <div>
                        <span className="text-muted" style={{ fontSize: 11 }}>
                          Hourly: $100-$400 - Remote Friendly - Est. Time: 1 to
                          3 months
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex border p-2 rounded">
                    <i
                      class="fa fa-paperclip text-muted fw=bold mx-1"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <p
                  className="px-2 pt-2"
                  style={{ fontSize: 13, fontWeight: 700 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  totam sed distinctio itaque iusto qui repellendus, tenetur
                  suscipit! Rerum dolores libero architecto. Impedit, suscipit.
                </p>
                <div className="skills mx-2">
                  <div
                    className="d-flex text-muted flex-wrap"
                    style={{ fontSize: 13 }}
                  >
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      User Interface Design
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      User Experience
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      Styleguide
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      Prototyping
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      +3 more
                    </p>
                  </div>
                </div>
                <div className="verified px-2 d-flex align-items-center flex-wrap">
                  <i
                    class="fa fa-check-circle me-1 text-primary"
                    aria-hidden="true"
                  ></i>
                  <div className="text-muted" style={{ fontSize: 13 }}>
                    Payment Verified
                  </div>
                  <div className="stars ms-4 text-warning">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star mx-2" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star mx-2" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="location ms-md-3 ms-0 d-flex align-items-center text-muted">
                    <i class="fa fa-map-marker fw-bold" aria-hidden="true"></i>
                    <div className="ms-2" style={{ fontSize: 13 }}>
                      New York, Manhattam
                    </div>
                  </div>
                </div>
              </div>
              <div className="jobs bg-light mt-2 rounded p-1">
                <div className="d-flex px-2 align-items-center justify-content-between">
                  <div className="company-logo d-flex align-items-center">
                    <img
                      src={office}
                      className="rounded"
                      alt=""
                      style={{ height: 40, width: 44, objectFit: "cover" }}
                    />
                    <div className="ms-2" style={{ lineHeight: 1.2 }}>
                      <div>
                        <span className="fw-bold">
                          Create Figma Designs for Web Applications.
                        </span>
                        <span
                          className="text-muted ms-1"
                          style={{ fontSize: 11 }}
                        >
                          2 hours ago
                        </span>
                      </div>
                      <div>
                        <span className="text-muted" style={{ fontSize: 11 }}>
                          Hourly: $100-$400 - Remote Friendly - Est. Time: 1 to
                          3 months
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex border p-2 rounded">
                    <i
                      class="fa fa-paperclip text-muted fw=bold mx-1"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <p
                  className="px-2 pt-2"
                  style={{ fontSize: 13, fontWeight: 700 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  totam sed distinctio itaque iusto qui repellendus, tenetur
                  suscipit! Rerum dolores libero architecto. Impedit, suscipit.
                </p>
                <div className="skills mx-2">
                  <div
                    className="d-flex text-muted flex-wrap"
                    style={{ fontSize: 13 }}
                  >
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      User Interface Design
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      User Experience
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      Styleguide
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      Prototyping
                    </p>
                    <p
                      className=" text-muteds p-1 rounded me-2"
                      style={{ backgroundColor: "#e5e5e5" }}
                    >
                      +3 more
                    </p>
                  </div>
                </div>
                <div className="verified px-2 d-flex align-items-center flex-wrap">
                  <i
                    class="fa fa-check-circle me-1 text-primary"
                    aria-hidden="true"
                  ></i>
                  <div className="text-muted" style={{ fontSize: 13 }}>
                    Payment Verified
                  </div>
                  <div className="stars ms-4 text-warning">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star mx-2" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star mx-2" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="location ms-md-3 ms-0 d-flex align-items-center text-muted">
                    <i class="fa fa-map-marker fw-bold" aria-hidden="true"></i>
                    <div className="ms-2" style={{ fontSize: 13 }}>
                      New York, Manhattam
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobite;
