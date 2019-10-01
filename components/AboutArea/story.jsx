import React from "react";
import { storiesOf } from "@storybook/react";
import AboutArea from "./component";

const stories = storiesOf("AboutArea", module);

stories.add("Default", () => {
  return <AboutArea />;
});
