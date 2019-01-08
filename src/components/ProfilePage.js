import React from 'react';

import { AuthContext } from './AuthProvider';
import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { ProfileCard } from './card/ProfileCard';

import { getUser } from '../scripts/graphQL';
import Background from '../images/login_background_2.jpg';

import './card/style.css';

export class ProfilePage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            toDisplay:<h2>Loading...</h2>,
        };
        this.userCard = this.userCard.bind(this)
    }

    componentDidMount(){
        this.userCard()
    }

    async userCard(){
        let user;
        await getUser(this.props.match.params['user_id']).then(res => {
            user = res;
        });
        this.setState({
            toDisplay : (
            <ProfileCard 
                avatar={user.image}
                username={user.username}
                email={user.email}
                following={user.following}
                followers={user.followers}
                id={user.id}
                displayFollowButton={user.id.localeCompare(localStorage.getItem('user_id'))}
            />)
        });   
    }

    render(){
        return (
            <AuthContext>
                {({ signOut }) => {
              
                    return (
                        <div>
                            <NavbarPage logout={signOut} />
                            <BackgroundPage src={Background}> 
                                {this.state.toDisplay}
                            </BackgroundPage>
                        </div>
                    );
                }}
            </AuthContext>
        );
    }
};