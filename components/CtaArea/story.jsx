import React from "react";
import { storiesOf } from "@storybook/react";
import CtaArea from "./component";

const stories = storiesOf("Cta", module);

stories.add("Default", () => {
  return <CtaArea />;
});
