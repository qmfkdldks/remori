import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import IconRow from "./component";

storiesOf("IconRow", module).add("Default", () => (
  <IconRow
    icon="Layout"
    title="Responsive Design"
    onClick={action("clicked")}
  />
));
