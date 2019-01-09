import React, { Component } from 'react';

import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { UsersGrid } from './UsersGrid/UsersGrid';

import Background from '../images/login_background_2.jpg';
import { searchUser } from '../scripts/graphQL';

export class SearchPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarPage />
                <BackgroundPage src={Background} isGrid={true}>
                    <UsersGrid users={searchUser(localStorage.getItem('search_username')).then(res => res)} />
                    {localStorage.removeItem('search_username')}
                </BackgroundPage >
            </div>
        );
    }
}