import React, { useState } from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggler,
  NavLink,
  MenuIcon,
  Options
} from "./style";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Container>
      <Navbar>
        <NavbarBrand>
          <img src={require("./images/favicon.png")} alt="logo" />
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar}>
          <MenuIcon />
        </NavbarToggler>

        <NavbarCollapse collapsed={collapsed}>
          <NavLink to="projects" smooth>
            Projects
          </NavLink>
          <NavLink to="about" smooth>
            About
          </NavLink>
          <NavLink to="services" smooth>
            Services
          </NavLink>
          <NavLink to="contact" smooth>
            Contact
          </NavLink>
        </NavbarCollapse>

        <Options>{/* <Button>Login</Button> */}</Options>
      </Navbar>
    </Container>
  );
};

export default Header;
