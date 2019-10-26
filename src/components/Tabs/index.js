import "./Tabs.css";
import React, { Component } from "react";

class Tabs extends Component {
  state = {
    activeTab: 0
  };

  setActiveTab = (id, e) => {
    this.setState({ activeTab: id });
  };

  renderTabsHeader() {
    const { tabs } = this.props;

    return (
      <article className="tabs-header">
        {tabs.map(tab => (
          <div
            className={tab.id === this.state.activeTab ? "tab active" : "tab"}
            onClick={e => this.setActiveTab(tab.id, e)}
          >
            {tab.title}
          </div>
        ))}
      </article>
    );
  }

  renderTabsContent() {
    const { tabs } = this.props;
    const index = this.state.activeTab;

    return <article>{tabs[index].component}</article>;
  }

  render() {
    return (
      <article className="Tabs-container">
        {this.renderTabsHeader()}
        {this.renderTabsContent()}
      </article>
    );
  }
}

export default Tabs;
