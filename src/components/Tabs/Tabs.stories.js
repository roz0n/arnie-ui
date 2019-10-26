import React from "react";
import Tabs from "./";

export default { title: "Tabs" };

const tabs = [
  {
    id: 0,
    title: "Account",
    component: <h1>Tab one</h1>
  },
  {
    id: 1,
    title: "Preferences",
    component: <h1>Tab two</h1>
  },
  {
    id: 2,
    title: "Privacy",
    component: <h1>Tab three</h1>
  }
];

export const withContent = () => <Tabs tabs={tabs} />;
