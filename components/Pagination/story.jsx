import React from "react";
import { number, withKnobs } from "@storybook/addon-knobs";
import { addDecorator, storiesOf } from "@storybook/react";
import Pagination from "./component";

addDecorator(withKnobs);

const stories = storiesOf("Pagination", module);

stories.add("Default", () => {
  const defaultProps = {
    onClick: page => () => {},
    currentPage: number("currentPage", 1),
    totalSize: number("totalSize", 100),
    perPage: number("perPage", 5)
  };

  return <Pagination {...defaultProps} />;
});
