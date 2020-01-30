import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Minicart from "../Minicart";
import { FaCartPlus } from "react-icons/fa";
import AppContext from "../../context/appContext";

const Header = () => {
  const context = useContext(AppContext);
  const qty = context.cart.length;

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
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                <NavDropdown.Item as="li">
                  <NavLink to="/dashboard/categories">Categories</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <NavLink to="/dashboard/products">Products</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  <FaCartPlus />
                  {qty > 0 && <span className="minicart-qty">{qty}</span>}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Minicart />
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
