import React from 'react';

import { BackgroundPage } from './BackgroundPage';
import { MessagesGrid } from './MessagesGrid';
import { getFavoriteMessages } from '../scripts/graphQL';

import Background from '../images/login_background_2.jpg';
import { NavbarWrapper } from './NavbarWrapper';

export class FavoritePage extends React.Component {
    
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
        <>
            <NavbarWrapper />
            <BackgroundPage src={Background} isGrid={true}>
                <MessagesGrid 
                    messages={getFavoriteMessages(localStorage.getItem('user_id'), 0).then(res => res.getFavoriteMessages)}/>
            </BackgroundPage>
        </>
    )
        }
};