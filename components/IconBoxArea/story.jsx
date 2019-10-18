import React from "react";
import { storiesOf } from "@storybook/react";
import IconBoxArea from "./component";

const stories = storiesOf("IconBoxArea", module);

stories.add("Default", () => {
  return <IconBoxArea />;
});
