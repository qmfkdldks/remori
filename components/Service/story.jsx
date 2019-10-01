import React from "react";
import { storiesOf } from "@storybook/react";
import Service from "./component";

storiesOf("Service", module).add("Default", () => (
  <div style={{ marginTop: "250px" }}>
    <Service />
  </div>
));
