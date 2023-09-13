import React from "react";

const OrgaBox = () => {
  return (
    <div>
      <section className="home-section">home page</section>
      <section className="farm-produce-section py-5">
        <div className="farm">
          <p className="text-center text-success">Our Shop</p>
          <h3 className="fw-bold text-uppercase text-center">from our farm</h3>
          <div className="row">.col-md-4</div>
        </div>
      </section>
      <section className="patners-section bg-success bg-opacity-25">
        <div className="patners container py-5">
          <div className="row vh-25">
            <div className="col-md-3" style={{}}>
              <p>Client Logo</p>
              <h3 className="text-uppercase fw-bold">Our Trusted Patners</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                voluptate unde repellendus ducimus sit?
              </p>
            </div>
            <div className="col-md-8">logos</div>
          </div>
        </div>
      </section>
      <section className="homemade-section">homemade page</section>
      <section className="blog-section">blog page</section>
      <section className="footer-section">footer</section>
    </div>
  );
};

export default OrgaBox;
