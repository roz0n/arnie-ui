import "./Dropdown.css";
import React, { useState } from "react";

const Dropdown = props => {
  const { items: menuItems = [] } = props;
  const [items, setItems] = useState(menuItems);
  const [activeItem, setActiveItem] = useState(0);
  const [isMenuOpen, openMenu] = useState(false);

  const setItem = index => {
    const currentItems = [...items];
    const newActiveItem = currentItems[index];

    currentItems.splice(index, 1);
    currentItems.unshift(newActiveItem);

    setItems(currentItems);
    setActiveItem(index);
  };

  // TODO: Refactor these styles
  const conditionalStyles = {
    height: props.height ? `${props.height}px` : "2rem",
    width: props.width ? `${props.width}px` : "100%",
    overflow: isMenuOpen ? "unset" : "hidden"
  };

  return (
    <article
      className="Dropdown-container"
      onClick={() => openMenu(!isMenuOpen)}
      style={conditionalStyles}
    >
      {items.map((option, i) => (
        <DropdownItem
          key={`Dropdown-${i}`}
          index={i}
          label={option}
          setActive={setItem}
          isActive={activeItem === i}
          isMenuOpen={isMenuOpen}
        />
      ))}
    </article>
  );
};

const DropdownItem = props => {
  const { index, isActive, label, isMenuOpen, setActive } = props;

  // TODO: Refactor these styles too
  const conditionalStyles = {
    borderTopRightRadius: isActive && "2px",
    borderTopLeftRadius: isActive && "2px"
  };

  return (
    <div
      className={`Dropdown-item-container ${isActive ? "active" : "inactive"}`}
      onClick={() => setActive(index)}
      style={conditionalStyles}
    >
      {label}
      {isActive && <i>&#9658;</i>}
    </div>
  );
};

export { Dropdown, DropdownItem };
