import React from "react";
import { storiesOf } from "@storybook/react";
import ProjectArea from "./component";

const stories = storiesOf("ProjectArea", module);

stories.add("Default", () => {
  return <ProjectArea />;
});
