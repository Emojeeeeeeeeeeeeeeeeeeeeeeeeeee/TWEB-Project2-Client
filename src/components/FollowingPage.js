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
            isGrid : true,
        };
        this.setBackgrounToNoGrid = this.setBackgrounToNoGrid.bind(this);
        this.setBackgroundToGrid = this.setBackgroundToGrid.bind(this);
    }

    componentWillReceiveProps(){
        this.setState({
            toDisplay:<h2>Loading...</h2>
        });
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
            <AuthContext>
                {({ signOut }) => {
        return(            
            <div>
                <NavbarWrapper />
                <BackgroundPage src={Background} isGrid={this.state.isGrid}>
                    <UsersGrid users={getUsersByIds(this.props.history.location.state.users).then(res => res)} 
                        setGrid={this.setBackgroundToGrid}
                        setNoGrid={this.setBackgrounToNoGrid} 
                        isGrid={this.state.isGrid} />
                </BackgroundPage >
            </div>
        );
    }}
</AuthContext>);
}
}