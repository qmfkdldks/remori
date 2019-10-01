import React from "react";
import { storiesOf } from "@storybook/react";
import Worker from "./component";

storiesOf("Workers", module).add("Default", () => (
  <div style={{ marginTop: "250px" }}>
    <Worker />
  </div>
));
