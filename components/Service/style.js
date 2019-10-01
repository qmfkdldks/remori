import styled, { keyframes } from "styled-components";

export const Rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

export const StyledContainer = styled.div`
  max-width: 540px;
  position: relative;

  @media (max-width: 767px) {
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1170px) {
    text-align: center;
    margin-top: 45px;
  }

  @media (min-width: 1170px) {
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  max-width: 100%;

  &.big-monitor {
    left: 15%;
    top: -98px;
  }

  &.creative {
    left: 0;
    top: -200px;
    right: 0;
    text-align: center;
    margin: 0 auto;
  }

  &.developer {
    left: 36%;
    z-index: 12;
    top: -55px;
  }

  &.flower-top {
    left: 55px;
    top: -38px;
    z-index: 1;
  }

  &.small-monitor {
    z-index: 3;
    right: 26%;
    top: -66px;
  }

  &.small-top {
    right: 19%;
    top: -41px;
    z-index: 2;
  }

  &.table {
    right: 97px;
    top: 40px;
    z-index: 1;
  }

  &.target {
    right: 23%;
    top: -175px;
    z-index: 2;
  }

  &.bg-image {
    top: -262px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    animation: ${Rotate} 20s linear infinite;
  }

  &.main-pic {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    display: none;
    position: relative;

    &.main-pic {
      display: inline-block;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1170px) {
    position: relative;
    display: none;

    &.main-pic {
      display: block;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;
