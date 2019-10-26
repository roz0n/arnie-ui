import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import arnieUI from "./arnieUI";

addParameters({
  options: {
    theme: themes.dark
  }
});

configure(require.context("../src", true, /\.stories\.js$/), module);
