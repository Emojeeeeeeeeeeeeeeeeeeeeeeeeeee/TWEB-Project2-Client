import React, { Component } from 'react';

import './style.css';

export class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    toggleLike() {
        
    }

    render() {
        return (
            <button class="like-btn like-review">
                <i class="fa fa-heart" aria-hidden="true"></i>Like
            </button>
        );
    }
}