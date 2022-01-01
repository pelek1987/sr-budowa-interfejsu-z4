import React from 'react';

function User({user}) {
    return (
        <div className="users__user">
            <div className="users__user-name">{user.name}</div>
            <div className="users__user-email">{user.email}</div>
            <div className="users__user-phone">{user.phone}</div>
        </div>
    );
}

export default User;
