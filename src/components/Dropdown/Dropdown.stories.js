import React from "react";
import {Dropdown} from "./";

export default { title: "Dropdown" };

const menuItems =  ["One", "Two", "Three", "Four"];

export const withChildren = () => (
  <Dropdown menuItems={menuItems} />
);