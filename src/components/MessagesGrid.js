import React, { Component } from 'react';
import { Container, MDBRow, MDBCol } from 'mdbreact';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Card } from './card/Card'

const fetchLength = 9;

export class MessagesGrid extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            allMessages:[],
            currentMessages: [],
            index: 0,
        };
        this.fetchMoreMessages = this.fetchMoreMessages.bind(this);
    }

    componentWillMount() {
        this.props.messages.then(response => {
            this.setState({ 
                allMessages: response,
            });
            
            /*this.setState((prevState) => {
                currentMessages: prevState.allMessages.slice(prevState.index, prevState.index + fetchLength)
            });*/
            // fill currentMessages from allMessages
            console.log("allmessage = " + this.state.allMessages[0].content);
        }).catch();
    }

    fetchMoreMessages = () => {
        setTimeout(() => {
            /*while(this.state.index < fetchLength) {
                this.setState(prevState => {
                    return {
                        currentMessages: [...prevState.currentMessages, prevState.allMessages[prevState.index]],
                        index: prevState.index + 1
                    }
                });
            }*/
            
        }, 1500);
    }

    renderMessage() {
        /*let msgs = [];
        this.state.currentMessages.map((i, index) => (
            <div key={index}>
                {msgs.push(i)}               
                {(index+1) % 3 === 0 && index > 0 ? this.renderMessagesRow(msgs) : ''}
                {(index+1) % 3 === 0 && index > 0 ? msgs = [] : ''}
            </div>
        ))*/
    }

    renderMessagesRow(msgs = []) {
        return (
            <MDBRow>
                {msgs.forEach(e => {
                    return (
                        <MDBCol size="4">
                            <Card
                                avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                                username={e.authorId}
                                messageContent={e.content} />
                        </MDBCol>
                    );
                })}
            </MDBRow>
        );
    }

    render() {
        let msgs = [];
        //const length = this.state.allMessages.length >= 9 ? 9 : this.state.allMessages;
        return (
            <div>
                <InfiniteScroll 
                    dataLength={fetchLength}
                    next={this.fetchMoreMessages}
                    hasMore={true}
                    loader={<h4>Loading...</h4>} 
                >
                {this.renderMessagesRow}
                </InfiniteScroll>
            </div>

            /*<Container fluid>
                <MDBRow>
                    <MDBCol size="4">
                        <Card
                            avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                            username="GeorgeWashington"
                            messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                        <Card
                            avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                            username="GeorgeWashington"
                            messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="GeorgeWashington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="GeorgeWashington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="GeorgeWashington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="GeorgeWashington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="GeorgeWashington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="GeorgeWashington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="GeorgeWashington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" /> 
                    </MDBCol>
                </MDBRow>
            </Container>*/
        );
    }
}