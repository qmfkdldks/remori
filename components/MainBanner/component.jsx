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
            Remori Data Driven Startup Argentina
          </HeroContentHeading>
          <HeroContentText>
            "Data Driven Business" We gather and measure all business' aspects
            of startups to eventually accumulate experience of success and
            failures. Share your idea and experience! Together we can build
            concrete foundation of our challenges.
          </HeroContentText>
          <Link to="contact" smooth>
            <StyledButton>Be Our Partners!</StyledButton>
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
