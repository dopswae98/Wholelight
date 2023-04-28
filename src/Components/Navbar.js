import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/wholelitelogo7.png";
import { useUserAuth } from "./UserAuthContext";

const Navbar = () => {
  const { cart, setVisibility } = useUserAuth();
  const handleCart = () => {
    setVisibility("true");
    // console.log(visibility);
  };

  return (
    <div>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="me-auto"></div>
            <div className="ge me-auto">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">
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
    </div>
  );
};

export default Navbar;
