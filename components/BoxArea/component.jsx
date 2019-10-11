import React from "react";
import IconBox from "../IconBox";
import { Section } from "./style";

const BoxArea = () => {
  return (
    <Section>
      <IconBox
        icon="Code"
        head="Objective Design"
        text="We build software based on minimal and well designed objectives. We believe in well designed objective is essential to be successful in business."
      />

      <IconBox
        icon="Layers"
        primary="#f78acb"
        secondary="rgba(247, 138, 203, 0.3)"
        head="Creativity Ground"
        text="Creativity accompanies failures. We need foundation of our creativity. Be one of us to build a ground for successes and failures."
      />

      <IconBox
        icon="Layout"
        primary="#c679e3"
        secondary="#edc3fc"
        head="Flexible Market"
        text="Because business should be flexible enough to adopt in fast changing market. We design flexible software achitecture."
      />

      <IconBox
        icon="Database"
        primary="#eb6b3d"
        secondary="rgba(235, 107, 61, 0.3)"
        head="Data Oriented"
        text="Software should be designed data oriented from the biginning to help business collect great quality of data. Math can help business to "
      />
    </Section>
  );
};

export default BoxArea;
