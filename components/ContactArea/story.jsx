import React from "react";
import { storiesOf } from "@storybook/react";
import ContactArea from "./component";

const stories = storiesOf("ContactArea", module);

stories.add("Default", () => {
  return <ContactArea />;
});
