import React from "react";
import { storiesOf } from "@storybook/react";

import {
  Shape1,
  Shape2,
  Shape3,
  Shape4,
  Shape5,
  Shape6,
  Shape7,
  Shape8
} from "./index";

storiesOf("Shapes", module).add("Default", () => (
  <>
    <Shape1 />
    <Shape2 />
    <Shape3 />
    <Shape4 />
    <Shape5 />
    <Shape6 />
    <Shape7 />
    <Shape8 />
  </>
));
