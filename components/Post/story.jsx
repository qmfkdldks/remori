import React from "react";
import { storiesOf } from "@storybook/react";
import Post from "./component";

const stories = storiesOf("Post", module);

stories.add("Default", () => {
  return <Post />;
});
