import React from 'react';
import {ClickedUserContext} from "../context/ClickedUserContext";

function User({user}) {
    return (
        <ClickedUserContext.Consumer>
            {({handleUserClick, clickedUser}) => (
                    <div className="users__user" onClick={(e) => handleUserClick(e, user)}>
                        <div className="users__user-name">{user.name}</div>
                        <div className="users__user-email">{user.email}</div>
                        <div className="users__user-phone">{user.phone}</div>
                    </div>
                )
            }
        </ClickedUserContext.Consumer>
    );
}

export default User;
