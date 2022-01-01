import React, {Component} from "react";
import api from '../api';

import UsersList from './UsersList';
import FormToggler from "./FormToggler";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

class UsersContainer extends Component {
    state = {
        users: [],
        searchedUserName: '',
        showSearchForm: false
    };

    togglerRef = React.createRef();
    inputRef = React.createRef();

    fetchData = () => {
        api.get('users.json')
            .then(data => this.setState({users: data}));
    }

    handleInputChange = (e) => this.setState({searchedUserName: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();
        const {users, searchedUserName} = this.state;
        const searchedUsers = users.filter(user => user.name.toLowerCase().includes(searchedUserName.toLowerCase()));
        this.setState({users: searchedUsers, searchedUserName: ''});
    }


    handleReset = () => {
        api.get("users.json")
            .then(data => this.setState({users: data}))
        this.setState({
            searchedUserName: '',
            showSearchForm: false
        })
    }
    showSearchForm = (e) => {
        const {showSearchForm} = this.state;
        e.preventDefault();
        if (e.keyCode === 13) {
            this.setState({showSearchForm: true});
        }
    }

    hideSearchForm = () => {
        this.setState({
            showSearchForm: false,
        })
    }

    componentDidMount() {
        this.togglerRef.current.focus();
        this.fetchData();
    }

    render() {
        const {users, showSearchForm, searchedUserName} = this.state;
        return (
            <>
                <FormToggler
                    ref={this.togglerRef}
                    onKeyDown={this.showSearchForm}
                    onClick={()=> this.setState({showSearchForm: true})}
                />
                {showSearchForm && (
                    <Form onSubmit={this.handleSubmit}>
                        <Input
                            ref={this.inputRef}
                            id="name"
                            label="User's full name:"
                            name="name"
                            value={searchedUserName}
                            onChange={this.handleInputChange}
                            placeholder="Full name..."
                        />
                        <Button label="Search" isSubmitButton/>
                        <Button label="Reset" onClick={this.handleReset}/>
                        <Button label="Hide" onClick={this.hideSearchForm}/>
                    </Form>
                )}
                <UsersList users={users}/>
            </>
        )
    }
}

export default UsersContainer;
