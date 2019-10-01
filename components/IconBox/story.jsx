import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import IconBox from "./component";

const Responsive = styled.div`
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
`;

const stories = storiesOf("IconBox", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => {
  const props = {
    primary: text("primary", "#44ce6f"),
    secondary: text("secondary", "#cdf1d8"),
    head: text("head", "Zero Configuration"),
    text: text(
      "text",
      "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna."
    ),
    icon: text("icon", "Layout")
  };

  return <IconBox {...props} />;
});

stories.add("Responsive Flex", () => {
  const props = {
    primary: text("primary", "#44ce6f"),
    secondary: text("secondary", "#cdf1d8"),
    head: text("head", "Zero Configuration"),
    text: text(
      "text",
      "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna."
    ),
    icon: text("icon", "Layout")
  };

  return (
    <Responsive>
      <IconBox {...props} />
      <IconBox {...props} />
      <IconBox {...props} />
      <IconBox {...props} />
    </Responsive>
  );
});
