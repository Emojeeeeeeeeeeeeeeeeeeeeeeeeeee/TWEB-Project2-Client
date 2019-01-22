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
                displayPersonnalMessage : false,
                isGrid : true,
            }
        }
        else{
        this.state = {
            displayPersonnalMessage : this.props.history.location.state.personnal,
            isGrid : true,
        }
        }
        this.setBackgrounToNoGrid = this.setBackgrounToNoGrid.bind(this);
        this.setBackgroundToGrid = this.setBackgroundToGrid.bind(this);
    }

    componentWillReceiveProps(){
        if(!(this.props.history.location === undefined || this.props.history.location.state === undefined || this.props.history.location.state.personnal === undefined)){
            this.setState({
                displayPersonnalMessage : this.props.history.location.state.personnal
            })
        }
}


setBackgroundToGrid() {
    this.setState({
        isGrid: true
    });
}

setBackgrounToNoGrid() {
    this.setState({
        isGrid: false
    });
}


    render(){
    return (
        <>
            <NavbarWrapper />
            <BackgroundPage src={Background} isGrid={this.state.isGrid}>
                <MessagesGrid 
                    messages={getFavoriteMessages(localStorage.getItem('user_id'), 0).then(res => res.getFavoriteMessages)} 
                    setGrid={this.setBackgroundToGrid}
                    setNoGrid={this.setBackgrounToNoGrid}
                    isGrid={this.state.isGrid} />
            </BackgroundPage>
        </>
    )
        }
};