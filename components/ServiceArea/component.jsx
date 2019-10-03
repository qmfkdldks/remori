import React from "react";
import {
  Wrapper,
  Description,
  SectionTitle,
  Heading,
  IconBoxContainer
} from "./style";

import Service from "../Service";
import Bar from "../Bar";
import IconRow from "../IconRow";

const ServiceArea = () => {
  return (
    <Wrapper>
      <Service />

      <Description>
        <SectionTitle>
          <Heading>Design & Development</Heading>
          <Bar />
        </SectionTitle>

        <IconBoxContainer>
          <IconRow title="Responsive design" />
          <IconRow title="Cross Platform Development" />
          <IconRow title="UX/UI design" />
          <IconRow title="Data Oriented" />
          <IconRow title="UX/UI design" />
          <IconRow title="Data Oriented" />
        </IconBoxContainer>
      </Description>
    </Wrapper>
  );
};

export default ServiceArea;
