import React, { Component } from 'react';

import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { UsersGrid } from './UsersGrid/UsersGrid';

import Background from '../images/login_background_2.jpg';
import { searchUser } from '../scripts/graphQL';
import { NavbarWrapper } from './NavbarWrapper';

export class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isGrid: false
        };
        this.setBackgrounToNoGrid = this.setBackgrounToNoGrid.bind(this);
        this.setBackgroundToGrid = this.setBackgroundToGrid.bind(this);
    }

    setBackgroundToGrid() {
        this.setState({
            isGrid: true
        });
    }

    setBackgrounToNoGrid() {
        this.setState({
            isGrid: false
        });
    }

    render() {
        return (
            <div>
                <NavbarWrapper />
                <BackgroundPage src={Background} isGrid={this.state.isGrid}>
                    <UsersGrid 
                        users={searchUser(localStorage.getItem('search_username')).then(res => res)} 
                        setGrid={this.setBackgroundToGrid}
                        setNoGrid={this.setBackgrounToNoGrid} />
                    {localStorage.removeItem('search_username')}
                </BackgroundPage >
            </div>
        );
    }
}