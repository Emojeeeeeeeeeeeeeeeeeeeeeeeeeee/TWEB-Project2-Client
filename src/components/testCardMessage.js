import React, { Component } from 'react';

import { Card } from './card/Card';

export class TestCardMessage extends Component {
    render() {
        return (
            <Card
                /*avatar="https://www.zmonline.com/media/18303634/lili.png?mode=crop&width=620&height=349&quality=60&scale=both"*/
                avatar="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                username="George Washington"
                messageContent="bla lab balla blab lala bla blab alb ab lablab lab abl abl"
            />
        );
    }
}