import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";

export default class HomeRouter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          {this.props.children}
          <Switch>
            <Route render={() => <div>none 1 matched</div>} />
          </Switch>
        </div>
      </Router>
    );
  }
}
