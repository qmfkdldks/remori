import React from "react";
import { storiesOf } from "@storybook/react";
import Article from "./component";

const stories = storiesOf("Article", module);

stories.add("Default", () => {
  return <Article />;
});
