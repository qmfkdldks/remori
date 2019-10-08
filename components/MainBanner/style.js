import styled from "styled-components";

import img from "./images/banner-bg1.jpg";

export const Background = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Rubik&display=swap");
  font-family: "Rubik", sans-serif;

  position: relative;
  height: 510px;
  z-index: 1;
  max-width: 1140px;
  margin: auto;
  margin-top: 300px;
  background: transparent url(${img}) right top no-repeat;

  @media only screen and (max-width: 767px) {
    height: 100%;
    margin-top: 50px;
    padding-bottom: 80px;
    background-position: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1170px) {
    height: 100%;
    margin-top: 85px;
    padding-bottom: 165px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const HeroBox = styled.div`
  width: 40%;

  @media screen and (max-width: 1170px) {
    width: 90%;
  }
`;

export const WorkerBox = styled.div`
  width: 40%;
  margin-top: 85px;

  @media screen and (max-width: 1170px) {
    width: 90%;
  }
`;

export const HeroContentHeading = styled.h1`
  font-size: 45px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #0e314c;
`;
export const HeroContentText = styled.p`
  margin-bottom: 30px;
  color: #586069;
  line-height: 1.9;
`;

export const StyledButton = styled.button`
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
  background-color: #44ce6f;

  &::after,
  &::before {
    background: #44ce6f;
    box-shadow: 0 13px 27px 0 rgba(68, 206, 111, 0.25);
  }

  &:hover {
    background: #007e8b;
    transform: translateY(-5px);
    box-shadow: 0 13px 27px 0 rgba(198, 121, 227, 0.25);
  }
`;
