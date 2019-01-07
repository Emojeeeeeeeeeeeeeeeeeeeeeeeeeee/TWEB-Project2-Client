import React from 'react';

import { AuthContext } from './AuthProvider';
import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { ProfileCard } from './card/ProfileCard';

import Background from '../images/login_background_2.jpg';

import './card/style.css';

export const ProfilePage = () => {

    return (
        <AuthContext>
            {({ signOut }) => {
              
                return (
                    <div>
                        <NavbarPage logout={signOut} />
                        <BackgroundPage src={Background}>
                             <ProfileCard 
                                avatar=""
                                username=""
                                email=""
                                following=""
                                followers=""
                             />
                        </BackgroundPage>
                    </div>
                );
            }}
        </AuthContext>
    );
};