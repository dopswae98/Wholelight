import React, { useState } from "react";
import Navbar from "../Components/Navbar";
// import axios from "axios";

const TalentVerification = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios
    //   // .post("http://localhost:4000/send-email", formData)
    //   .post("https://emailbackend.vercel.app/send-email", formData)
    //   .then((response) => {
    //     console.log(response);
    //     console.log("formdata", formData);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <div className="overflow-hidden">
      <Navbar />
      <section className="login bg-light mt-5 pt-5">
        <div className="locations">
          <div className="row">
            <div className="col-md-6 my-auto mx-auto">
              <form
                className="was-validated"
                // action="https://emailbackend.vercel.app/send-mail"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input
                  className="form-control mt-3"
                  placeholder="Your name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  className="form-control my-4"
                  placeholder="example@gmail.com"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  className="form-control"
                  id="validationServer01"
                  type="text"
                  name="message"
                  placeholder="Message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-danger my-4 "
                    type="submit"
                    onClick={() => console.log("formData")}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">footer</section>
    </div>
  );
};

export default TalentVerification;
