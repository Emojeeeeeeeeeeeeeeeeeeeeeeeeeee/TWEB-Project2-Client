import React from 'react';

import { AuthContext } from './AuthProvider';
import { NavbarPage } from './Navbar';

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