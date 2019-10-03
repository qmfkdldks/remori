import React, { useState, useEffect } from "react";
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
          <NavLink>Home</NavLink>
        </NavbarCollapse>

        <Options>
          <Button>Login</Button>
        </Options>
      </Navbar>
    </Container>
  );
};

export default Header;
