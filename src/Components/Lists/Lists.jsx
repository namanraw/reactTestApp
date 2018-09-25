import React, { Component } from "react";
import List from "./List";

export default class Lists extends Component {
  constructor() {
    super();
    this.state = {
      TASKS: TASKS
    };
  }
  d = w => {
    TASKS.splice((w - 1), 1);
    this.setState({ TASKS: TASKS });
  };
  render() {
    return (
      <div>
        {this.state.TASKS.map((task, i) => {
          return (
            <List
              key={i}
              sNo={i + 1}
              title={task.title}
              dateTime={task.dateTime}
              deleteEntry={this.d}
            />
          );
        })}
      </div>
    );
  }
}

const TASKS = [
  { title: "eat", dateTime: new Date() },
  { title: "food", dateTime: new Date() },
  { title: "water", dateTime: new Date() },
  { title: "gym", dateTime: new Date() },
  { title: "swim", dateTime: new Date() },
  { title: "train", dateTime: new Date() },
  { title: "bike", dateTime: new Date() },
  { title: "car", dateTime: new Date() }
];
