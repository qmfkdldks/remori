import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggler,
  NavLink,
  NavNextLink,
  MenuIcon,
  Logo
} from "./style";

const Header = ({ isBlog }) => {
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
          {!isBlog ? (
            <>
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
              <NavNextLink href="/blog">Blog</NavNextLink>
            </>
          ) : (
            <NavNextLink href="/">Home</NavNextLink>
          )}
        </NavbarCollapse>
      </Navbar>
    </Container>
  );
};

Header.defaultProps = {
  isBlog: false
};

Header.propTypes = {
  isBlog: PropTypes.boolean
};

export default Header;
