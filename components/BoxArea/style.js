/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding-bottom: 80px;
  margin-top: -130px;
  z-index: 1;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #aaa;

  @media (max-width: 768px) {
    > div {
      width: 80%;
    }
  }

  @media (min-width: 768px) and (max-width: 1170px) {
    > div {
      width: 40%;
    }
  }

  @media (min-width: 1170px) {
    > div {
      width: 20%;
    }
  }

  @media only screen and (max-width: 767px) {
    margin-top: 0;
    padding-bottom: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1170px) {
    padding-bottom: 50px;
    margin-top: -65px;
  }
`;
