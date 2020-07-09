import React, { Component } from "react";

class UsersContainer extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="users">
        {data.map(user => (
          <div className="users__user" key={user.login.uuid}>
            <div className="users__user-name">{user.name.first}</div>
            <div className="users__user-surname">{user.name.last}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default UsersContainer;
