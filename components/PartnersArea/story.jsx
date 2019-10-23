import React from "react";
import { storiesOf } from "@storybook/react";
import PartnersArea from "./component";

const stories = storiesOf("PartnersArea", module);

stories.add("Default", () => {
  return <PartnersArea />;
});
