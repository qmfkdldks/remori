import React, { useState } from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggler,
  NavLink,
  MenuIcon,
  Logo
} from "./style";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Container>
      <Navbar>
        <NavbarBrand href="/">
          <Logo>REMORI</Logo>
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
          <NavLink to="posts" smooth>
            Posts
          </NavLink>
          <NavLink to="contact" smooth>
            Contact
          </NavLink>
        </NavbarCollapse>
      </Navbar>
    </Container>
  );
};

export default Header;
