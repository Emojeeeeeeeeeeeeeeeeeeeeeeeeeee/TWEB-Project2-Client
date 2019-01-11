import React from 'react';

import { AuthContext } from './AuthProvider';
import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { MessagesGrid } from './MessagesGrid';
import { getMessages, getPersonnalMessages } from '../scripts/graphQL';

import Background from '../images/login_background_2.jpg';

export class NavbarWrapper extends React.Component {
    

    render(){
    return (
        <AuthContext>
            {({ signOut }) => {
                return <NavbarPage logout={signOut}/>
            }
        }
        </AuthContext>
    );
        }
};