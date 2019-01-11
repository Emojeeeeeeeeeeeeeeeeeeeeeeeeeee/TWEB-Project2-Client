import React, { Component } from 'react';

import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { UsersGrid } from './UsersGrid/UsersGrid';
import { getFollowings } from '../scripts/graphQL';

import Background from '../images/login_background_2.jpg';

export class FollowingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toDisplay:<h2>Loading...</h2>,
        };
    }

    render() {
        //<UsersGrid users={getFollowings(this.props.location.state.username).then(res => res)} />
        return(            
            <div>
                <NavbarPage />
                <BackgroundPage src={Background} isGrid={true}>
                    <UsersGrid users={this.props.location.state.users} />
                </BackgroundPage >
            </div>
        );
    }
}