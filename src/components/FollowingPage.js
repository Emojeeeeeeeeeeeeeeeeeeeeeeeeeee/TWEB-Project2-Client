import React, { Component } from 'react';

import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { UsersGrid } from './UsersGrid/UsersGrid';
import { getUsersByIds } from '../scripts/graphQL';
import { AuthContext } from './AuthProvider';

import Background from '../images/login_background_2.jpg';
import { NavbarWrapper } from './NavbarWrapper';

export class FollowingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toDisplay:<h2>Loading...</h2>,
        };
    }

    componentWillReceiveProps(){
        this.setState({
            toDisplay:<h2>Loading...</h2>
        });
    }

    render() {
        return (
            <AuthContext>
                {({ signOut }) => {
        //<UsersGrid users={getFollowings(this.props.location.state.username).then(res => res)} />
        return(            
            <div>
                <NavbarWrapper />
                <BackgroundPage src={Background} isGrid={true}>
                    <UsersGrid users={getUsersByIds(this.props.history.location.state.users).then(res => res)} />
                </BackgroundPage >
            </div>
        );
    }}
</AuthContext>);
}
}