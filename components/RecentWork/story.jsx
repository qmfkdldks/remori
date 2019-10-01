import React from "react";
import { storiesOf } from "@storybook/react";
import RecentWork from "./component";

const stories = storiesOf("RecentWork", module);

stories.add("Default", () => {
  return <RecentWork />;
});
