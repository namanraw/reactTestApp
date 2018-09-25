import React, { Component } from "react";
import  Lists  from "./Lists";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {match} = this.props;
    return (
      <div>
        <Lists />
      </div>
    );
  }
}
