import "./Accordion.css";
import React, { useState, useRef } from "react";

const Accordion = props => {
  const {
    heading = "Tab",
    children,
    content,
    contentAsChildren = true
  } = props;

  const [isExpanded, setExpanded] = useState(false);
  const contentArea = useRef(null);
  const expandedClass = isExpanded ? "open" : "closed";

  return (
    <article className="Accordion-container">
      <section
        className="Accordion-heading"
        onClick={() => setExpanded(!isExpanded)}
      >
        <i className={`icon ${expandedClass}`}>&#9658;</i>
        {heading}
      </section>

      <section
        className={`Accordion-content ${expandedClass}`}
        ref={contentArea}
      >
        {isExpanded && !contentAsChildren && content}
        {isExpanded && contentAsChildren && children}
        {!contentAsChildren && children}
        {contentAsChildren && contentAsChildren}
      </section>
    </article>
  );
};

export default Accordion;
