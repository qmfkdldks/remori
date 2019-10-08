import React, { useState } from "react";
import { Link, scroller } from "react-scroll";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggler,
  NavLink,
  MenuIcon,
  Options,
  Button
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
          <NavLink>
            <Link to="projects" smooth>
              Projects
            </Link>
          </NavLink>
          <NavLink>
            <Link to="about" smooth>
              About
            </Link>
          </NavLink>
          <NavLink>
            <Link to="services" smooth>
              Services
            </Link>
          </NavLink>
          <NavLink>
            <Link to="contact" smooth>
              Contact
            </Link>
          </NavLink>
        </NavbarCollapse>

        <Options>
          {/* <Button>Login</Button> */}
        </Options>
      </Navbar>
    </Container>
  );
};

export default Header;
