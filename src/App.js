import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {ClickedUserContext} from './context/ClickedUserContext'
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import UsersContainer from "./components/UsersContainer";
import UserProfile from "./components/UserProfile";
import "./styles.css";

export default class App extends Component {
    state = {
        clickedUser: null,
    }

    handleUserClick = (e, user) => {
        this.setState({
            clickedUser: user
        })
    }

    render() {
        const {clickedUser} = this.state;
        return (
            <ClickedUserContext.Provider value={{
                handleUserClick: this.handleUserClick,
                clickedUser,
            }}>
                <Router>
                    <div className="App">
                        <Navigation>
                            <li><Link to="/">Dashboard</Link></li>
                            <li><Link to="/users">Users</Link></li>
                            {clickedUser && <li><Link to="/user-profile">Clicked User</Link></li>}
                        </Navigation>
                        <Switch>
                            <Route exact path="/">
                                <Dashboard/>
                            </Route>
                            <Route path="/users">
                                <UsersContainer/>
                            </Route>
                            <Route path="/user-profile">
                                <UserProfile/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </ClickedUserContext.Provider>
        );
    }
}
