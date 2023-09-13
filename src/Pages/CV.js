import React from "react";
import img from "../img/office1.jpg";

const CV = () => {
  return (
    <div className="">
      <section
        className="header"
        style={{
          background: "linear-gradient(45deg, #205072, #7be495, #cff4d2)",
          minHeight: 230,
          position: "relative",
        }}
      >
        <div className="container position-relative">
          <div className="img position-absolute" style={{ height: 50 }}>
            <img
              className="rounded"
              src={img}
              alt="user-img"
              style={{ height: 200, position: "relative", bottom: -130 }}
            />
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="name">
                <h1 className="pt-5 fw-bold text-white">JOHN DOE</h1>
                <h5 className="text-white">FRONT END DEVELOPER</h5>
              </div>
            </div>
            <div className="col-md-8">
              <div className="desc pt-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                  doloremque labore assumenda vero tempore quae autem blanditiis
                  at dolorem, minima, eos, in aut harum dolorum? Aliquam sunt
                  dolor facere, perferendis maxime, est sapiente reprehenderit
                  distinctio voluptas ratione eaque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  sequi eius repellat alias culpa est eaque repellendus illo
                  blanditiis laudantium?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 mt-5 container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact">
              <p
                className="text-uppercase d-inline-block mt-4 px-3 text-white bg-primary "
                style={{
                  background:
                    "linear-gradient(95deg, #205072, #329d9c, #205072)",
                }}
              >
                contact
              </p>
              <div className="contact-item">
                <i className="fa fa-phone"></i>
                <span className="ms-1">+263 773 373 786</span>
              </div>
              <div className=" mt-2 contact-item">
                <i className="fa fa-envelope"></i>
                <span className="ms-1">ephraimmatarutse@gmail.com</span>
              </div>
              <div className="mt-2 contact-item">
                <i className="fa fa-globe"></i>
                <span className="ms-1">www.ephcode.com</span>
              </div>
              <div className="mt-2 contact-item">
                <i className="fa fa-linkedin"></i>
                <span className="ms-1">linkedin.com/ephraimmatarutse</span>
              </div>
              <div className="mt-2 contact-item">
                <i className="fa fa-map-marker"></i>
                <span className="ms-1">Harare, Zimbabwe</span>
              </div>
            </div>
            <div className="skills mt-4">
              <p className="text-uppercase d-inline-block mt-4 px-3 text-white bg-primary ">
                education
              </p>
              <div className="graphs pe-5">
                <div className="graph d-flex align-items-center">
                  <p className="me-3">HTML5</p>
                  <div
                    className="progress mb-3 flex-grow-1"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar">0%</div>
                  </div>
                </div>
                <div className="graph d-flex align-items-center">
                  <p className="me-3">HTML5</p>

                  <div
                    class="progress mb-3 flex-grow-1"
                    role="progressbar"
                    aria-label="Success example with label"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar bg-success w-25">25%</div>
                  </div>
                </div>
                <div className="graph d-flex align-items-center">
                  <p className="me-3">HTML5</p>

                  <div
                    class="progress mb-3 flex-grow-1"
                    role="progressbar"
                    aria-label="Success example with label"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar bg-success w-25">25%</div>
                  </div>
                </div>
                <div className="graph d-flex align-items-center">
                  <p className="me-3">HTML5</p>

                  <div
                    class="progress mb-3 flex-grow-1"
                    role="progressbar"
                    aria-label="Success example with label"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar bg-success w-75">25%</div>
                  </div>
                </div>
                <div className="graph d-flex align-items-center">
                  <p className="me-3">HTML5</p>

                  <div
                    class="progress mb-3 flex-grow-1"
                    role="progressbar"
                    aria-label="Success example with label"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar bg-success w-75">25%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ marginTop: -90 }}>
            <div className="education">
              <p className="text-uppercase d-inline-block mt-4 px-3 text-white bg-primary ">
                education
              </p>
              <div className="contact-item">
                <div className="row">
                  <div className="col-md-3">
                    <p>2017-2021 </p>
                  </div>
                  <div className="col-md-9 info">
                    <h6 className="fw-bold">Degree name</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas consequatur ab eaque rem, exercitationem odit aut.
                      Rerum, nam blanditiis.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <p>2017-2021 </p>
                  </div>
                  <div className="col-md-9 info">
                    <h6 className="fw-bold">Degree name</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas consequatur ab eaque rem, exercitationem odit aut.
                      Rerum, nam blanditiis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="experince">
              <p className="text-uppercase d-inline-block mt-4 px-3 text-white bg-primary ">
                experience
              </p>
              <div className="contact-item">
                <div className="row">
                  <div className="col-md-3">
                    <p>2017-2021 </p>
                  </div>
                  <div className="col-md-9 info">
                    <h6 className="fw-bold">Juniour Fullstack Developer</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas consequatur ab eaque rem, exercitationem odit aut.
                      Rerum, nam blanditiis.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <p>2017-2021 </p>
                  </div>
                  <div className="col-md-9 info">
                    <h6 className="fw-bold">Degree name</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas consequatur ab eaque rem, exercitationem odit aut.
                      Rerum, nam blanditiis.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <p>2017-2021 </p>
                  </div>
                  <div className="col-md-9 info">
                    <h6 className="fw-bold">Degree name</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas consequatur ab eaque rem, exercitationem odit aut.
                      Rerum, nam blanditiis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer container">
        <p className="text-uppercase d-inline-block mt-4 px-3 text-white bg-primary ">
          Hobbies
        </p>
        <div className="mt-3 mb-5">
          <div className="row">
            <div className="col-md-2 bg-light p-3 text-center border border-5 border-white">
              <i class="fa fa-music fw-bold fs-3" aria-hidden="true"></i>
              <p>Music</p>
            </div>
            <div className="col-md-2 bg-light p-3 text-center border border-5 border-white">
              <i class="fa fa-music fw-bold fs-3" aria-hidden="true"></i>
              <p>Music</p>
            </div>
            <div className="col-md-2 bg-light p-3 text-center border border-5 border-white">
              <i class="fa fa-music fw-bold fs-3" aria-hidden="true"></i>
              <p>Music</p>
            </div>
            <div className="col-md-2 bg-light p-3 text-center border border-5 border-white">
              <i class="fa fa-music fw-bold fs-3" aria-hidden="true"></i>
              <p>Music</p>
            </div>
            <div className="col-md-2 bg-light p-3 text-center border border-5 border-white">
              <i class="fa fa-music fw-bold fs-3" aria-hidden="true"></i>
              <p>Music</p>
            </div>
            <div className="col-md-2 bg-light p-3 text-center border border-5 border-white">
              <i class="fa fa-book fw-bold fs-3" aria-hidden="true"></i>
              <p>Reading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
