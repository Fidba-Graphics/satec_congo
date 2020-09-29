import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "./images/logo.png";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <div>
      <Navbar
        color="white text-white fixed"
        light
        expand="md"
        className="navbar-main-wrapper"
      >
        <NavbarBrand href="#" className="brand-navbar" onClick={() => close()}>
          <img src={logo} alt="" srcSet="" onClick={() => close()} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} style={{ outline: 0 }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto nav-links" navbar>
            <NavItem onClick={() => close()}>
              <NavLink href="#about-section">A propos</NavLink>
            </NavItem>
            <NavItem onClick={() => close()}>
              <NavLink href="#products-section">Produits</NavLink>
            </NavItem>
            <NavItem onClick={() => close()}>
              <NavLink href="#team-section">Team</NavLink>
            </NavItem>
            <NavItem onClick={() => close()}>
              <NavLink href="#contacts">Contacts</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Navigation;
