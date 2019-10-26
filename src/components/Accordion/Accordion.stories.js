import React from "react";
import Accordion from "./";

export default { title: "Accordion" };

export const withChildren = () => (
  <Accordion heading={"Content"} contentAsChildren={true} initialState={"open"}>
    {<div>Content?</div>}
  </Accordion>
);

export const withHeading = () => (
  <Accordion heading={"Heading"}>{<div>Content?</div>}</Accordion>
);
