import React, { Component } from 'react';
import { Container, MDBRow, MDBCol } from 'mdbreact';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Card } from './card/Card'

const fetchLength = 9;

export class MessagesGrid extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            messages: []
        };
    }

    fetchMoreMessages = () => {
        const data = this.props.messages;
        console.log('data = ' + data);
        setTimeout(() => {
            this.setState({
                messages: this.state.messages.concat(Array.from({ length: 20 }))
            });
        }, 1500);
    }

    renderMessagesRow(msgs = []) {
        return (
            <MDBRow>
                {msgs.forEach(e => {
                    return (
                        <MDBCol size="4">
                            <Card
                                avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                                username="GeorgeWashington"
                                messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                        </MDBCol>
                    );
                })}
            </MDBRow>
        );
    }

    render() {
        let msgs = [];

        return (
            <div>
                <MDBCol size="4">
                            <Card
                                avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                                username="GeorgeWashington"
                                messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                        </MDBCol>
                <InfiniteScroll 
                    dataLength={this.state.messages.length}
                    next={this.fetchMoreMessages}
                    hasMore={true}
                    loader={<h4>Loading...</h4>} 
                >
                    {this.state.messages.map((i, index) => (
                        <div key={index}>
                            {msgs.push(i)}               
                            {(index+1) % 3 === 0 && index > 0 ? this.renderMessagesRow(msgs) : ''}
                            {(index+1) % 3 === 0 && index > 0 ? msgs = [] : ''}
                        </div>
                    ))}
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