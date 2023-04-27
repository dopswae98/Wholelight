import React, { useEffect, useState } from "react";
import img1 from "../img/office1.jpg";
import img2 from "../img/office2.jpg";
import img3 from "../img/office3.jpg";
import logo from "../img/wholelitelogo7.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./homepage.css";
import {
  faShoppingBag,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
//import serviceData from "../assets/data/serviceData";
import products from "../assets/data/products";

const Homepage = () => {
  const [visibility, setVisibility] = useState(false);
  const [cart, setCart] = useState([]);
  const AddToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (item) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    setCart(hardCopy);
  };
  const handleCart = () => {
    setVisibility(true);
  };
  const handleClose = () => {
    setVisibility(false);
  };

  const ShoppingCart = () => {
    useEffect(() => {
      total();
    }, [cart]);
    const [cartTotal, setcartTotal] = useState(0);
    const total = () => {
      let totalVal = 0;
      for (let i = 0; i < cart.length; i++) {
        totalVal += cart[i].price;
      }
      setcartTotal(totalVal);
      console.log(cart);
    };
    return (
      <div className="modals">
        <div
          className="cart-bar bg-white"
          style={{ overflowY: "scroll", zIndex: 115 }}
        >
          <div className="cart-top d-flex justify-content-between px-3 mt-3">
            <p className="fw-bold text-dark">Cart Items</p>
            <faArrowCircleUp color={"black"} size={5} />
            <FontAwesomeIcon
              icon={faArrowCircleUp}
              onClick={handleClose}
              style={{ color: "black" }}
            />
          </div>
          <div className="cart-item-container px-3">
            <div className="product">
              {cart.map((item, index) => {
                return (
                  <div
                    className="item d-flex text-dark bg-white mt-3"
                    key={index}
                  >
                    <div
                      className="img  d-flex align-items-center justify-content-center"
                      style={{
                        height: 50,
                        width: 80,
                      }}
                    >
                      <img
                        src={item.imgUrl}
                        alt={item.productName}
                        style={{
                          height: 50,
                        }}
                      />
                    </div>
                    <div
                      className="desc ms-3"
                      style={{ lineHeight: 0.9, fontSize: 13 }}
                    >
                      <p>{item.productName}</p>
                      <div className="price d-flex justify-content-between align-items-center ">
                        <p className="my-auto">${item.price}</p>
                        <div className="adder d-flex">
                          <div className="add border border-dark border-2 d-flex justify-content-center align-items-center">
                            -
                          </div>
                          <div className="add bg-dark border border-dark border-2 d-flex justify-content-center align-items-center"></div>
                          <div className="add border border-dark border-2 d-flex justify-content-center align-items-center">
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="remove">
                      <FontAwesomeIcon
                        className="my-auto"
                        icon={faArrowCircleUp}
                        onClick={() => removeFromCart(item)}
                        style={{ color: "black" }}
                      />
                    </div>
                  </div>
                );
              })}
              <div className="px-3 bg-warning py-3">
                <p>{cartTotal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="Homepage">
      {visibility && <ShoppingCart />}
      <section className="nav-section">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <a className="logo navbar-brand" href="/#">
              <img src={logo} alt="Wholight Trading Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="me-auto"></div>
              <div className="ge me-auto">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="/#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <div className="acc-cart position-relative ms-3">
                <span className="badge bg-secondary rounded-circle">
                  {cart.length}
                </span>
                <i className="fa-regular "></i>
                <FontAwesomeIcon icon={faShoppingBag} onClick={handleCart} />
                <span className="ms-1">Account</span>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section className="carousel">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="0"
              class="active"
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
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="products py-2">
        <div className="card">
          <div className="row w-100 mx-auto">
            {products.map((item) => {
              return (
                <div key={item.id} className="card-item col-md-2 bg-white">
                  <div className="card-image d-flex align-items-center justify-content-center">
                    <i className="fa fa-heart"></i>
                    <img src={item.imgUrl} alt={item.productName} />
                  </div>
                  <p>{item.productName}</p>
                  <p>{item.category}</p>
                  <div className="prices d-flex justify-content-between">
                    <p>{`$${item.price}`}</p>
                    <i
                      className="fa fa-plus"
                      onClick={() => {
                        AddToCart(item);
                      }}
                    ></i>
                  </div>
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
