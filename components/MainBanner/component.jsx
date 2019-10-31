import React from "react";
import { Link } from "react-scroll";
import {
  Background,
  HeroContentHeading,
  HeroContentText,
  StyledButton,
  WorkerBox,
  HeroBox,
  Wrapper
} from "./style";
import Worker from "../Worker";
import {
  Shape1,
  Shape2,
  Shape3,
  Shape4,
  Shape5,
  Shape6,
  Shape7,
  Shape8
} from "../Shape/index";

const MainBanner = () => {
  return (
    <Background>
      <Wrapper>
        <HeroBox>
          <HeroContentHeading>
            We build custom data driven software
          </HeroContentHeading>
          <HeroContentText>
            We are a custom mobile and desktop development company. We work with
            companies who are interested in building well designed software and
            who are interested in data driven business. Our organization
            accumulates experience of success and failures. Together we can
            build a foundation of our challenges.
          </HeroContentText>
          <Link to="contact" smooth>
            <StyledButton>Build Minimum Viable Product!</StyledButton>
          </Link>
        </HeroBox>
        <WorkerBox>
          <Worker />
        </WorkerBox>
      </Wrapper>

      <Shape1 />
      <Shape2 />
      <Shape3 />
      <Shape4 />
      <Shape5 />
      <Shape6 />
      <Shape7 />
      <Shape8 />
    </Background>
  );
};

export default MainBanner;
