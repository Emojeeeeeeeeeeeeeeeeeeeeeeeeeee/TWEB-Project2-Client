import React from 'react';

import { AuthContext } from './AuthProvider';
import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { MessagesGrid } from './MessagesGrid';

export const HomePage = () => {
    return (
        <AuthContext>
            {({ signOut }) => {
                return (
                    <div>
                        <NavbarPage logout={signOut}/>
                        <BackgroundPage>
                            <MessagesGrid />
                        </BackgroundPage>
                    </div>
                );
            }}
        </AuthContext>
    );
};