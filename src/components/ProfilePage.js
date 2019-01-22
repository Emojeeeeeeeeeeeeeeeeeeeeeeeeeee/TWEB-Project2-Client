import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import { AuthContext } from './AuthProvider';
import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { ProfileCard } from './card/ProfileCard';
import { MoodCard } from './card/MoodCard';
import { getUser, updateMood } from '../scripts/graphQL';

import Background from '../images/login_background_2.jpg';
import './card/style.css';
import { NavbarWrapper } from './NavbarWrapper';

export class ProfilePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            toDisplay:<h2>Loading...</h2>,
        };
        this.userCard = this.userCard.bind(this)
        this.changeImage = this.changeImage.bind(this)
    }

    componentDidMount(){
        this.userCard()
    }

    changeImage(mood){
    const userId = localStorage.getItem('user_id');
    updateMood(userId, mood)
    .then(() => {
        this.userCard();
    });
    }

    async userCard(){
        let user;
        await getUser(this.props.location.state.id).then(res => {
            user = res;
            console.log(res)
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
                <>
                    <NavbarWrapper />
                    <BackgroundPage src={Background} isGrid={false}> 
                    <MDBRow style={ { display: 'flex', justifyContent: 'center' } }>
                        <MDBCol md="3" style={{ marginTop: '7%' }}>
                            {this.state.toDisplay}
                        </MDBCol>
                        {this.props.location.state.id.localeCompare(localStorage.getItem('user_id')) ? '' :
                        <MDBCol md="3" style={{ marginTop: '2%' }}>
                            <MoodCard changeImage={this.changeImage}/>
                        </MDBCol>
                        }
                    </MDBRow>
                    </BackgroundPage>
                </>
                    );
    }
};