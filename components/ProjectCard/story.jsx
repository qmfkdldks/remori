import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ProjectCard from "./component";

const Responsive = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background: repeating-linear-gradient(
    45deg,
    #ffffff,
    #dedede 10px,
    #ffffff 10px,
    #dedede 20px
  );

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

const stories = storiesOf("ProjectCard", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => {
  const props = {
    imgUrl: text(
      "imgUrl",
      "https://startp-react.envytheme.com/_next/static/images/1-0c3ced4a230a3c81d8accf64d4e5aae7.jpg"
    ),
    title: text("title", "Maum Cafe"),
    description: text(
      "description",
      "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna."
    ),
    onClick: action("clicked")
  };

  return <ProjectCard {...props} />;
});

stories.add("Responsive Flex", () => {
  const props = {
    imgUrl: text(
      "imgUrl",
      "https://startp-react.envytheme.com/_next/static/images/1-0c3ced4a230a3c81d8accf64d4e5aae7.jpg"
    ),
    title: text("title", "Maum Cafe"),
    description: text(
      "description",
      "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna."
    )
  };

  return (
    <Responsive>
      <ProjectCard {...props} />
      <ProjectCard {...props} />
      <ProjectCard {...props} />
      <ProjectCard {...props} />
    </Responsive>
  );
});
