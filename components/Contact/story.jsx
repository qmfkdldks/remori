import React from "react";
import { storiesOf } from "@storybook/react";
import Contact from "./component";

const stories = storiesOf("Contact", module);

stories.add("Default", () => {
  return <Contact />;
});
