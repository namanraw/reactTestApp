import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import LinkPreviewLayout from "../Components/LinkPreview";

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/h" component={Home} />
          <Route exact path="/link-preview" component={LinkPreviewLayout} />
          <Route exact path="/" render={()=><div>home</div>} />
          <Route render={() => <div>none matched</div>} />
        </Switch>
      </Router>
    );
  }
}
