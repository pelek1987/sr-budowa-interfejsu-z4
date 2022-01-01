import React, { Component } from "react";
import api from '../api';

import UsersList from './UsersList';
class UsersContainer extends Component {
  state = {
    users: []
  };
  fetchData = () => {
    api.get('users.json')
            .then(data => this.setState({users: data}));
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { users } = this.state;
    return <UsersList users={users} />
  }
}

export default UsersContainer;
