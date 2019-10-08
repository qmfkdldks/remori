import styled from "styled-components";

export const Box = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Lato&display=swap");

  border: 1px dashed #cdf1d8;
  padding: 30px 20px;
  position: relative;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(72, 69, 224, 0.1);
  transition: 0.5s;
  min-height: 300px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-radius: 5px;
    height: 100%;
    background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%);
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-9px);
    border-color: transparent;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
`;

export const Circle = styled.div`
  display: inline-block;
  text-align: center;
  width: 55px;
  height: 55px;
  line-height: 55px;
  border-radius: 50%;
  transition: 0.5s;
  background: ${props => props.secondary || "#cdf1d8"};
  color: ${props => props.primary || "#44ce6f"};

  * {
    vertical-align: middle;
  }

  ${Box}:hover & {
    background: #fff;
  }
`;

export const Head = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 15px;
  font-weight: 500;
  color: #0e314c;

  ${Box}:hover & {
    color: #ffffff;
  }
`;

export const Text = styled.span`
  font-family: "Lato", sans-serif;
  color: #586069;
  line-height: 1.9;

  ${Box}:hover & {
    color: #ffffff;
  }
`;
