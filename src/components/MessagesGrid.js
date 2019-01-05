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
            index: fetchLength,
        };
        this.fetchMoreMessages = this.fetchMoreMessages.bind(this);
        this.renderMessages = this.renderMessagesRow.bind(this);
    }

    componentWillMount() {
        this.props.messages.then(response => {
            this.setState({ 
                allMessages: response,
                currentMessages: response.slice(0, fetchLength)
            });
            console.log(this.state.allMessages);
           
            // fill currentMessages from allMessages
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

    renderMessages() {
        /*let msgs = [];
        this.state.currentMessages.map((i, index) => (
            <div key={index}>
                {msgs.push(i)}               
                {(index+1) % 3 === 0 && index > 0 ? this.renderMessagesRow(msgs) : ''}
                {(index+1) % 3 === 0 && index > 0 ? msgs = [] : ''}
            </div>
        ))*/
        let table = [];
        for(let i = 0; this.state.currentMessages.length; i+=1) {
            if(i%3 === 0) {
                table.push(
                    <MDBRow>
                        <MDBCol size="4">
                            <Card
                                avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                                username={this.state.currentMessages[i].authorId}
                                messageContent={this.state.currentMessages[i].content} />
                        </MDBCol>
                    </MDBRow>
                );
            }
            else {
                table.push(
                    <MDBCol size="4">
                        <Card
                            avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                            username={this.state.currentMessages[i].authorId}
                            messageContent={this.state.currentMessages[i].content} />
                    </MDBCol>
                );
            }
        }
        console.log("yooooo " + table);
        return table;
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
                {this.renderMessages}
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