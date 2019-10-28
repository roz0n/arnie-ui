import "./Dropdown.css";
import React, { useState } from "react";

const Dropdown = props => {
  const { menuItems = [] } = props;
  const [activeItem, setActiveItem] = useState(0);
  const [isMenuOpen, openMenu] = useState(false);

  return (
    <article
      className="Dropdown-container"
      onClick={() => openMenu(!isMenuOpen)}
      style={{
        height: props.height ? `${props.height}px` : "350px",
        width: props.width ? `${props.width}px` : "300px",
        overflow: isMenuOpen ? "unset" : "hidden"
      }}
    >
      {menuItems.map((option, i) => (
        <DropdownItem
          key={`Dropdown-${i}`}
          index={i}
          label={option}
          onClick={setActiveItem}
          isActive={activeItem === i}
          isMenuOpen={isMenuOpen}
        />
      ))}
    </article>
  );
};

const DropdownItem = props => {
  const { index, isActive, label, isMenuOpen, onClick } = props;

  return (
    <div
      className={`Dropdown-item-container ${isActive ? "active" : "inactive"}`}
      onClick={() => onClick(index)}
      style={{
        borderTopRightRadius: isActive && "2px",
        borderTopLeftRadius: isActive && "2px"
      }}
    >
      {label}
      {isActive && <i>{isMenuOpen ? "open" : "closed"}</i>}
    </div>
  );
};

export { Dropdown, DropdownItem };
