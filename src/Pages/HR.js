import React, { useEffect, useState } from "react";
import "./hr.css";

const HR = () => {
  const [liked, setLiked] = useState(false);
  const [jobs, setJobs] = useState([]);

  const allJobs = [
    {
      id: 1,
      position: "Payroll Manager",
      location: "Harare",
      experince: 5,
      level: "Senior",
      like: true,
    },
    {
      id: 2,
      position: "Payroll Manager",
      location: "Harare",
      experince: 5,
      level: "Senior",
      like: false,
    },
    {
      id: 3,
      position: "Payroll Manager",
      location: "Harare",
      experince: 5,
      level: "Senior",
      like: true,
    },
  ];

  useEffect(() => {
    setJobs([...allJobs]);
  }, []);

  const handleLike = (id) => {
    console.log("id", id);
    setJobs((prevJobs) => {
      console.log("prev jobs", prevJobs);
      return prevJobs.map((job) =>
        job.id === id ? { ...job, like: !job.like } : job
      );
    });
    console.log("prev jobs latest", jobs);
  };

  return (
    <div className="w-100 overflow-x-hidden">
      <section className="nav-section mb-5">nav</section>
      <section className="nav-section mb-5 p-5 bg-info-subtle">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-10 mx-auto text-center">
              <h1 className="fw-bold text-primary">Available Jobs</h1>
              <p>
                Jobs available apply to Editorial Specialist, Account Manager,
                Human Resources Specialist and more!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="nav-section">
        <div className="row">
          <div className="col-md-8 mx-auto bg-light rounded py-2 d-flex align-items-center justify-content-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                height={30}
                width={30}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <input
              type="search"
              name="search"
              className="form-control ms-2 outline-0 border-0"
              placeholder="Search"
            />
          </div>
        </div>
      </section>
      <section className="jobs mt-5 pt-3 container">
        <div className="row bg-infos">
          {jobs.map((job, id) => {
            return (
              <div className="col-md-4 mb-md-0 mb-3" key={id}>
                <div
                  className={` bg-white rounded p-5 pt-5s pb-2 pe-5s position-relative
                ${
                  job.id % 3 === 0
                    ? "box_shadow3"
                    : job.id % 3 === 1
                    ? "box_shadow1"
                    : "box_shadow2"
                }
                `}
                >
                  {job.like ? (
                    <div
                      className="position-absolute likes d-flex align-items-center justify-content-center bg-light-subtle rounded-circle p-1"
                      style={{
                        right: 10,
                        top: 10,
                        width: 25,
                        height: 25,
                        cursor: "pointer",
                      }}
                      onClick={() => handleLike(job.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6 text-danger"
                        height={35}
                        width={35}
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    </div>
                  ) : (
                    <div
                      className="position-absolute likes d-flex align-items-center justify-content-center bg-light-subtle rounded-circle p-1"
                      style={{
                        right: 10,
                        top: 10,
                        width: 25,
                        height: 25,
                        cursor: "pointer",
                      }}
                      onClick={() => handleLike(job.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="text-warning w-6 h-6"
                        height={25}
                        width={25}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="post">
                    <h5 className="mb-3 fw-bold">{job.position}</h5>
                    <div className="d-flex align-items-center text-secondary mb-3">
                      <span className="me-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-primary"
                          height={20}
                          width={20}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <hr className="border border-primary-subtle" />
                  <div className="yearsnlevel text-secondary d-flex align-items-center justify-content-between py-2">
                    <div className="experience d-flex align-items-center justify-content-center">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 me-1"
                          height={20}
                          width={20}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                          />
                        </svg>
                      </p>
                      <p>{job.experince} years Exp</p>
                    </div>
                    <div className="position d-flex align-items-center">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 me-1"
                          height={20}
                          width={20}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </p>
                      <p>{job.level} Level</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="notification-section mt-5 py-5 bg-secondary-subtle">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center d-flex flex-column gap-3">
              <h1 className="fw-bold text-primary">Notification</h1>
              <p>
                Sign up now to get updated on latest posts and relevant career
                opportunities
              </p>
              <form
                className="d-flex align-items-center justify-content-center"
                action=""
              >
                <input
                  type="email"
                  name="email"
                  className="form-control ms-2 py-3 px-3 outline-0 border-0 rounded-end-0 rounded-end0"
                  placeholder="Enter your email"
                />
                <button className="btn btn-primary rounded-start-0 fw-bold py-3 px-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section
        className="footer-section-area  pt-3 border-primary  mt-5 bg-info bg-opacity-10"
        style={{ borderTop: "1px dotted" }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <p>© 2023. All rights reserved</p>
          <div className="d-flex gap-2">
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HR;
