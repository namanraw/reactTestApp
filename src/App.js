import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./Router/Route";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">React TODO Application !!</h1>
        <AppRouter />
      </div>
    );
  }
}

export default App;
