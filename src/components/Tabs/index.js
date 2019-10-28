import "./Tabs.css";
import React, { useState } from "react";

const Tabs = props => {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <article className="Tabs-container">
      <article className="tabs-header">
        {tabs.map(tab => (
          <div
            className={tab.id === activeTab ? "tab active" : "tab"}
            onClick={e => setActiveTab(tab.id, e)}
          >
            {tab.title}
          </div>
        ))}
      </article>
      <article>{tabs[activeTab].component}</article>
    </article>
  );
};

export default Tabs;
