import React, { Component } from 'react';
import { Container ,MDBRow, MDBCol } from 'mdbreact';

import { Card } from './card/Card'

export class MessagesGrid extends Component {
    constructor(props) {
        super(props);
   
    }

    render() {
        return (
            <Container fluid>
                <MDBRow>
                    <MDBCol size="4">
                        <Card
                            avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                            username="George Washington"
                            messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                        <Card
                            avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                            username="George Washington"
                            messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="George Washington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="George Washington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="George Washington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="George Washington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="George Washington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="George Washington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" />
                    </MDBCol>
                    <MDBCol size="4">
                    <Card
                        avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                        username="George Washington"
                        messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl" /> 
                    </MDBCol>
                </MDBRow>
            </Container>
        );
    }
}