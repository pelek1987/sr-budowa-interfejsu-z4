import React, { Component } from "react";

import UsersContainer from "./components/UsersContainer";
import "./styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersContainer />
      </div>
    );
  }
}
