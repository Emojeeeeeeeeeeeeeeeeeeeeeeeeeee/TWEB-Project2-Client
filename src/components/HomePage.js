import React from 'react';

import { AuthContext } from './AuthProvider';
import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';
import { MessagesGrid } from './MessagesGrid';
import { getMessages, getPersonnalMessages } from '../scripts/graphQL';

import Background from '../images/login_background_2.jpg';

export class HomePage extends React.Component {
    
    constructor(props){
        super(props);
        if(this.props.history.location === undefined || this.props.history.location.state === undefined || this.props.history.location.state.personnal === undefined){
            this.state = {
                displayPersonnalMessage : false
            }
        }
        else{
        this.state = {
            displayPersonnalMessage : this.props.history.location.state.personnal
        }
        }
    }

    componentWillReceiveProps(){
        if(!(this.props.history.location === undefined || this.props.history.location.state === undefined || this.props.history.location.state.personnal === undefined)){
            this.setState({
                displayPersonnalMessage : this.props.history.location.state.personnal
            })
        }
}


    render(){
    return (
        <AuthContext>
            {({ signOut }) => {
                return (
                    <div>
                        <NavbarPage logout={signOut}/>
                        <BackgroundPage src={Background} isGrid={true}>
                            <MessagesGrid 
                                messages={this.state.displayPersonnalMessage ? getPersonnalMessages(localStorage.getItem('user_id'), 0).then(res => res.getMessagesOfUser) : getMessages(localStorage.getItem('user_id'), 0).then(res => res.getMessagesFromDB)}/>
                        </BackgroundPage>
                    </div>
                );
            }}
        </AuthContext>
    );
        }
};