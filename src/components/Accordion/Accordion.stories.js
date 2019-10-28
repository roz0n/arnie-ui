import React from "react";
import { action } from "@storybook/addon-actions";
import Accordion from "./";

export const withChildren = () => (
  <Accordion
    heading={"Content"}
    contentAsChildren={true}
    initialState={"open"}
    onClick={action("accordion-toggle-click")}
  >
    {<div>Content?</div>}
  </Accordion>
);

export default { title: "Accordion" };