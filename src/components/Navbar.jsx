import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${props.darkMode}`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${
              props.darkMode === "light" ? "dark" : "light"
            }`}
            to="/"
          >
            TextUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.darkMode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.darkMode === "light" ? "dark" : "light"
                  }`}
                  to="/about"
                >
                  {props.name}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${
                  props.darkMode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable darkmode
              </label>
            </div>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

Navbar.prototype = {
  name: PropTypes.string.isRequired,
};
export default Navbar;
