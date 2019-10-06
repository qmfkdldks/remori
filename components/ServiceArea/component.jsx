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
          <IconRow icon="Layout" title="Responsive Design" />
          <IconRow icon="Copy" title="Cross Platform" />
          <IconRow icon="Framer" title="UX/UI design" />
          <IconRow icon="Compass" title="Data Driven" />
          <IconRow icon="Cpu" title="Machine Learning" />
          <IconRow icon="Code" title="Simplest Solution" />
        </IconBoxContainer>
      </Description>
    </Wrapper>
  );
};

export default ServiceArea;
