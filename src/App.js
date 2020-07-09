import React, { Component } from "react";

import UsersContainer from "./components/UsersContainer";
import "./styles.css";

export default class App extends Component {
  state = {
    users: [],
    show: true
  };
  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => this.setState({ users: data.results }))
      .catch(error => console.error(error));
  }
  render() {
    const { show, users } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleToggle}>toggle</button>
        {show && <UsersContainer data={users} />}
      </div>
    );
  }
}
