import React from 'react';

import { AuthContext } from './AuthProvider';
import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { MessagesGrid } from './MessagesGrid';
import { getMessages } from '../scripts/graphQL';

import Background from '../images/login_background_2.jpg';


export const HomePage = () => {
    getMessages('5c2e49d308001d4020b59891', 0).then(res => console.log(res));
    return (
        <AuthContext>
            {({ signOut }) => {
                return (
                    <div>
                        <NavbarPage logout={signOut}/>
                        <BackgroundPage src={Background}>
                            
                            <MessagesGrid messages={getMessages}/>
                        </BackgroundPage>
                    </div>
                );
            }}
        </AuthContext>
    );
};