import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import AppContext from "../../context/appContext";

const Header = () => {
  const context = useContext(AppContext);

  return (
    <header className="">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="#home">
            React js simple e-commerce shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <Nav>
              <Nav.Link as="li">
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                {!context.isAuthenticated && (
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                )}
                {context.isAuthenticated && (
                  <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                )}
                {context.isAuthenticated && (
                  <NavDropdown.Item href="/categories">
                    Categories
                  </NavDropdown.Item>
                )}
                {context.isAuthenticated && (
                  <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
