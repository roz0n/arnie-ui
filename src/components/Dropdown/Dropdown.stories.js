import React from "react";
import { Dropdown } from "./";

export const withItems = () => {
  const clubs = ["Real Madrid CF", "FC Barcelona", "Manchester United"];
  return <Dropdown items={clubs} />;
};

export default { title: "Dropdown" };
