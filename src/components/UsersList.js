import React from 'react';
import User from './User';

function UsersList({ users }) {
  return(
    <div className="users">
      {users.map(user => ( <User key={user._id} user={user} />))}
    </div>
  );
}

export default UsersList;
