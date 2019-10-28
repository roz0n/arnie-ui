import "./Tabs.css";
import React, { useState } from "react";

const Tabs = props => {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <article className="Tabs-container">
      <section className="Tabs-header">
        {tabs.map(tab => (
          <div
            className={tab.id === activeTab ? "Tab active" : "Tab"}
            onClick={e => setActiveTab(tab.id, e)}
          >
            {tab.title}
          </div>
        ))}
      </section>

      <section className="Tabs-content">
        <div>{tabs[activeTab].component}</div>
      </section>
    </article>
  );
};

export default Tabs;