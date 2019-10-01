import { configure } from "@storybook/react";
import "./addons";

const req = require.context("../components", true, /story.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
