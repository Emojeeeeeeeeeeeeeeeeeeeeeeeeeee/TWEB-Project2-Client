import React from 'react';

import { AuthContext } from './AuthProvider';
import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { ProfileCard } from './card/ProfileCard';

import { getUser } from '../scripts/graphQL';
import Background from '../images/login_background_2.jpg';

import './card/style.css';

export const ProfilePage = ({ match }) => {
    //Pour tester: localhost:3000/u/*INSERT USER_ID HERE*
    
    // J'essaye des trucs ici un peu... ça marche pas de ouf, j'commence à craquer. 
    // Promise.resolve YOLO Aucune idée C'est clairement pas ça
    const user = getUser(match.params['user_id']).then(res => {
        return Promise.resolve(res);
    });

    //ça c'est un print, pour voir un peu. Parce que bon.. le debugger, tout ça tout ça.. hein. OUAIS. Aller. 
    console.log(user);

    
    return (
        <AuthContext>
            {({ signOut }) => {
              
                // faut injecter les infos de l'user la bas dedans, en dessous là, Oui la, NOooon pas là omg
                // oui voilà, un peu à droite..... BOUGE PAS !! Parfait.
                return (
                    <div>
                        <NavbarPage logout={signOut} />
                        <BackgroundPage src={Background}> 
                             <ProfileCard 
                                avatar={''}
                                username={''}
                                email={''}
                                following={''}
                                followers={''}
                                followButton={''}
                             />
                        </BackgroundPage>
                    </div>
                );
            }}
        </AuthContext>
    );
};