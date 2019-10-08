import React from "react";
import IconBox from "../IconBox";
import { Section } from "./style";

const BoxArea = () => {
  return (
    <Section>
      <IconBox
        icon="Layout"
        heading="Code"
        text="Code is the most powerful tool in the world. Consult to us to bring your idea in reality."
      />

      <IconBox
        icon="Layout"
        primary="#f78acb"
        secondary="rgba(247, 138, 203, 0.3)"
        heading="Platform"
        text="We need foundation of our creativity. Be one of us to build success & failures foundation."
      />

      <IconBox
        icon="Layout"
        primary="#c679e3"
        secondary="#edc3fc"
        heading="Connection"
        text="Connect potential startup partners through our network. Welcome everyone!"
      />

      <IconBox
        icon="Layout"
        primary="#eb6b3d"
        secondary="rgba(235, 107, 61, 0.3)"
        heading="Immense Data"
        text="We are collecting good quantity and quality of data to not repeat failures."
      />
    </Section>
  );
};

export default BoxArea;