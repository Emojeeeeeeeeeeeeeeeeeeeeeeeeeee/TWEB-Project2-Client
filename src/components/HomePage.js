import React from 'react';

import { AuthContext } from './AuthProvider';
import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { MessagesGrid } from './MessagesGrid';

import Background from '../images/login_background_2.jpg';

export const HomePage = () => {
    return (
        <AuthContext>
            {({ signOut, getMessages }) => {
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