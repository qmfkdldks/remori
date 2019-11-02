/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Section = styled.section`
  overflow: hidden;
  position: relative;
  z-index: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #0f054b;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const Container = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Head = styled.h3`
  color: #ffffff;
  font-size: 25px;
  margin-bottom: 17px;
  font-family: "Rubik", sans-serif;

  @media screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 1.5;
  }
`;

export const Body = styled.p`
  color: #ffffff;
  opacity: 0.95;
  margin-bottom: 25px;
  font-family: "Rubik", sans-serif;

  @media screen and (max-width: 767px) {
    text-align: center;
    margin-top: 35px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  text-align: center;

  &.cta-shape {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
