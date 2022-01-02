import React from 'react';
import {ClickedUserContext} from "../context/ClickedUserContext";

function UserProfile() {
    return (
        <ClickedUserContext.Consumer>
            {({clickedUser}) => (
                    <div>
                        {JSON.stringify(clickedUser)}
                    </div>
                )
            }
        </ClickedUserContext.Consumer>
    );
}

export default UserProfile;
