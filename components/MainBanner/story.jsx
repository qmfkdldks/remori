import React from "react";
import { storiesOf } from "@storybook/react";
import MainBanner from "./component";

const stories = storiesOf("MainBanner", module);

stories.add("Default", () => {
  return <MainBanner />;
});
