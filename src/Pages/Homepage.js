import React from "react";
import img1 from "../img/office1.jpg";
import img2 from "../img/office2.jpg";
import img3 from "../img/office3.jpg";
import logo from "../img/wholelitelogo7.png";

import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./homepage.css";
import {
  // faShoppingBag,
  // faArrowCircleUp,
  // faCircleXmark,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
//import serviceData from "../assets/data/serviceData";
import products from "../assets/data/products";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useUserAuth } from "../Components/UserAuthContext";
import ShoppingCart from "../Components/ShoppingCart";

const Homepage = () => {
  // const [visibility, setVisibility] = useState(false);

  const { visibility } = useUserAuth();
  // const [visibility, setVisibility] = useState(false);
  // const Notify = () => toast("Item Successfully Added!");

  // {cart} = useUserContainer()

  const { AddToCart } = useUserAuth();
  // const [cart, setCart] = useState([]);
  // const AddToCart = (item) => {
  //   setCart([...cart, item]);
  //   toast.success("Product Added Succesfully");
  // };

  return (
    <div className="Homepage">
      {visibility && <ShoppingCart />}
      <section className="nav-section sticky-top">
        <Navbar />
      </section>
      <section className="carousel">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="products py-2">
        <div className="card">
          <div className="row px-3 w-100">
            {products.map((item) => {
              return (
                <div key={item.id} className="card-item  col-md-3 bg-white">
                  <Link className="Link" to={`/productDetail/${item.id}`}>
                    <div className="card-image d-flex align-items-center justify-content-center">
                      <i className="fa fa-heart"></i>

                      <img src={item.imgUrl} alt={item.productName} />
                    </div>
                    <p>{item.productName}</p>
                    <p>{item.category}</p>
                  </Link>
                  <div className="prices d-flex justify-content-between">
                    <p>{`$${item.price}`}</p>
                    <FontAwesomeIcon
                      className="add-icon"
                      icon={faCirclePlus}
                      onClick={() => {
                        AddToCart(item);
                        // (e) => Notify();
                      }}
                    />
                  </div>
                  {/* <ToastContainer /> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="footer text-dark bg-success py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex flex-row mb-2">
                <a className="logo navbar-brand" href="/#">
                  <img src={logo} alt="Wholight Trading Logo" />
                </a>
                <h5 className="fw-bold ms-1">Wholelight Trading</h5>
              </div>
              <p>ephraimmatarutse@gmail.com</p>
              <p>6 Nigel Phillip Eastlea Harare</p>
            </div>
            <div className="col-md-3">
              <h6>FAQ</h6>
              <h6>Delivery Period</h6>
              <h6>Returns</h6>
              <h6>Customer Service</h6>
            </div>
            <div className="col-md-3">
              <h6>Stores</h6>
              <h6>Wholesale</h6>
              <h6>Refer a friend</h6>
              <h6>Contact US</h6>
            </div>
            <div className="col-md-3">
              <h5>Lets stay together</h5>
              <p>Enter your email to unlock 10% OFF.</p>
              <div className="email border border-top-0 border-start-0 border-end-0 d-flex align-items-center justify-content-between">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="email-text bg-transparent text-white border-0 mb-1"
                />
                <h6 className="fw-bold">Submit</h6>
              </div>
              <div className="follow-us pt-3 pb-1">
                <h5>Follow Us</h5>
                <div className="social d-flex justify-content-between">
                  <div className="icon bg-warning d-flex align-items-center justify-content-center">
                    <i className="fa fa-facebook fs-5"></i>
                  </div>
                  <div className="icon  bg-warning d-flex align-items-center justify-content-center">
                    <i className="fa fa-whatsapp fs-5"></i>
                  </div>
                  <div className="icon bg-warning d-flex align-items-center justify-content-center">
                    <i className="fa fa-twitter fs-5"></i>
                  </div>
                  <div className="icon bg-warning d-flex align-items-center justify-content-center">
                    <i className="fa fa-instagram fs-5"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-section py-3  d-flex justify-content-between flex-wrap">
            <span>&copy; 2023 Wholelighttrading</span>
            <span>
              Terms of Service | Privacy Policy | Refund Policy | Accessibility
              Policy
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
