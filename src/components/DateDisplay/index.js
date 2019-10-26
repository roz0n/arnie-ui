import "./DateDisplay.css";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("dateDisplayStore")
@observer
class DateDisplay extends Component {
  componentDidMount() {
    const { tick } = this.props.dateDisplayStore;
    tick();
  }
  componentWillUnmount() {
    const { clear } = this.props.dateDisplayStore;
    clear();
  }

  render() {
    const { currentDate, currentTime } = this.props.dateDisplayStore;
    return (
      <article className="date-display-container">
        <small className="date">
          {currentDate} {currentTime}{" "}
        </small>
      </article>
    );
  }
}

export default DateDisplay;
