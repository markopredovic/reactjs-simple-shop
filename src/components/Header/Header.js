import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <h1 className="navbar-brand" href="#">
            Simple e-commerce shop
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/"
                  activeClassName="active"
                >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/categories"
                  activeClassName="active"
                  exact
                >
                  Categories <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/products"
                  activeClassName="active"
                  exact
                >
                  Products <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
