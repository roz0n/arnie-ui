import "./Dropdown.css";
import React, { Component } from "react";
import { computed, action, observable } from "mobx";
import { observer } from "mobx-react";
import _ from "lodash";
// Components
import Icon from "../Icon";

const DropdownItem = props => {
  return (
    <div
      className={`Dropdown-item-container ${
        props.isActive ? "active" : "inactive"
      }`}
      onClick={e => props.onClick(e, props.label)}
      data-value={props.label}
      style={{
        height: "100%",
        backgroundColor: "white",
        color: "black",
        position: "relative",
        zIndex: "100",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all .25s",
        boxSizing: "border-box",
        paddingLeft: ".75rem",
        paddingRight: ".5rem",
        borderTopRightRadius: props.isActive && "2px",
        borderTopLeftRadius: props.isActive && "2px",
        borderTop: ".25px solid #e1e1e1",
      }}
    >
      {props.label}
      {props.isActive && (
        <Icon code={props.isMenuOpen ? "arrow_drop_up" : "arrow_drop_down"} />
      )}
    </div>
  );
};

@observer
class DropdownMenu extends Component {
  @observable isOpen = false;
  @observable items = ["One", "Two", "Three", "Four"];

  @computed
  get activeItem() {
    return this.items[0];
  }

  @action
  openMenu = () => {
    return (this.isOpen = true);
  };

  @action
  closeMenu = () => {
    return (this.isOpen = false);
  };

  @action
  handleClick = () => {
    return this.isOpen ? this.closeMenu() : this.openMenu();
  };

  @action
  setActiveItem = (e, item) => {
    const index = this.items.findIndex(i => i === item);

    if (this.items.includes(item) && index !== 0) {
      this.items.unshift(item);
    }

    return (this.items = _.uniq(this.items));
  };

  render() {
    const { props } = this;
    return (
      <article
        className="Dropdown-container"
        onClick={this.handleClick}
        style={{
          height: props.height ? `${props.height}px` : "350px",
          width: props.width ? `${props.width}px` : "300px",
          overflow: this.isOpen ? "unset" : "hidden",
          borderRadius: `2px`,
          transition: "all .25s",
          fontSize: "14px",
          fontWeight: "700"
        }}
      >
        {this.items.map((option, i) => (
          <DropdownItem
            index={i}
            label={option}
            onClick={this.setActiveItem}
            isActive={this.activeItem === option}
            isMenuOpen={this.isOpen}
          />
        ))}
      </article>
    );
  }
}

DropdownMenu.Item = DropdownItem;
export default DropdownMenu;
