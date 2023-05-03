import React from "react";
import { useUserAuth } from "../Components/UserAuthContext";

const RequestQuote = () => {
  const { setRfqVisible, setVisibility } = useUserAuth();
  const handleQuote = () => {
    setVisibility(false);
    setRfqVisible(false);
  };
  return (
    <div className="rfq pt-5">
      <div className="container d-flex flex-column align-content-center pt-5 text-white">
        <div className="row">
          <div className="col-md-8 mx-auto bg-info d-flex flex-column py-3">
            <h6 className="fw-bold fs-md-6 fs-6">
              Enter Your Email Below to receive a qoute
            </h6>
            <input type="text" />
            <button className="btn btn-warning mt-3" onClick={handleQuote}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
