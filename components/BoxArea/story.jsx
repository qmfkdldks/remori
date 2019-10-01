import React from "react";
import { storiesOf } from "@storybook/react";
import BoxArea from "./component";

const stories = storiesOf("BoxArea", module);

stories.add("Default", () => {
  return <BoxArea />;
});
