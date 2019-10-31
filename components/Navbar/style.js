/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { Menu } from "styled-icons/feather/Menu";
import { Link } from "react-scroll";

export const Container = styled.header`
  max-width: 1170px;
  margin: auto;

  &.is-sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  }

  &.is-sticky .startp-nav {
    background-color: #ffffff !important;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
    padding: 5px 0;
  }
`;

export const Navbar = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarCollapse = styled.div`
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 95%;
    display: ${props => (props.collapsed ? "none" : "flex")};
    flex-direction: column;
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  color: #4a6f8a;
  padding: 0;
  margin: 0px 14px;
  font-family: "Rubik", sans-serif;
  cursor: pointer;
`;

export const NavbarToggler = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled(Menu)`
  width: 1.5em;
  height: 1.5em;
`;

export const NavbarBrand = styled.a`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  text-decoration: none;
`;

export const Logo = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
  font-family: "Nunito", sans-serif;
  font-size: 45px;
  color: #ffac5d;
`;

export const Options = styled.div`
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  background: #c679e3;
  box-shadow: 0 13px 27px 0 rgba(198, 121, 227, 0.25);
  font-weight: 600;
  font-size: 14px;
  border: none;
  padding: 15px 40px;
  position: relative;
  border-radius: 4px;
  z-index: 1;
  text-transform: uppercase;
  transition: 0.5s;
  color: #ffffff;

  &::after,
  &::before {
    background: #44ce6f;
    -webkit-box-shadow: 0 13px 27px 0 rgba(68, 206, 111, 0.25);
    box-shadow: 0 13px 27px 0 rgba(68, 206, 111, 0.25);
  }
`;
