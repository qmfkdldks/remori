import React from "react";
import { storiesOf } from "@storybook/react";
import PostArea from "./component";

const stories = storiesOf("PostArea", module);

stories.add("Default", () => {
  return <PostArea />;
});
