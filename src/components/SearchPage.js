import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { UsersList } from './UsersGrid/UsersGrid';

import Background from '../images/login_background_2.jpg';
import { searchUser } from '../scripts/graphQL';

export class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toRender : <h2>LOADING...</h2>
        };

        this.renderSearch = this.renderSearch.bind(this);
    }

    renderSearch(username) {
        this.setState({
            toRender : <UsersList users={searchUser(localStorage.getItem('user_id'), 0).then(res => res.getMessagesFromDB)} />
        });
        return <Redirect to="/search/:username" />
    }

    render() {
        return (
            <div>
                <NavbarPage renderSearch={this.renderSearch} />
                <BackgroundPage src={Background}>
                    {this.state.toRender}
                </BackgroundPage >
            </div>
        );
    }
}