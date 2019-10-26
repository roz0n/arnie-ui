import "./Accordion.css";
import React, { Component } from "react";

class Accordion extends Component {
  state = {
    isExpanded: false,
    ref: React.createRef()
  };

  open = () => {
    this.setState({ isExpanded: true });
  };

  close = () => {
    this.setState({ isExpanded: false });
  };

  toggle = () => {
    this.props.onClick();
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  setInitialState = state => {
    switch (state) {
      case "open":
        this.open();
        break;
      case "closed":
        this.close();
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    const { initialState } = this.props;
    this.setInitialState(initialState);
  }

  render() {
    const { heading, children, content, contentAsChildren } = this.props;
    const expandedClass = this.isExpanded ? "open" : "closed";

    return (
      <article className="accordion-container">
        <section className="heading" onClick={this.toggle}>
          <i className={`material-icons icon ${expandedClass}`}>></i>
          {heading}
        </section>

        <section className={`content ${expandedClass}`} ref={this.ref}>
          {this.isExpanded && !contentAsChildren && content}
          {this.isExpanded && contentAsChildren && children}
          {/* {!contentAsChildren && children}
          {contentAsChildren && contentAsChildren} */}
        </section>
      </article>
    );
  }
}

export default Accordion;
