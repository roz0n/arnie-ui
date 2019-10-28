import React from "react";
import { Dropdown } from "./";

export default { title: "Dropdown" };

const spanishClubs = [
  "Real Madrid CF",
  "FC Barcelona",
  "Atletico Madrid CF",
  "Sevilla CF"
];

export const withItems = () => <Dropdown items={spanishClubs} />;
