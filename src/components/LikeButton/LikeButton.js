import React, { Component } from 'react';

import './style.css';

export class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            status: false
        };
        this.toggleLike = this.toggleLike.bind(this);
    }

    toggleLike() {
        // Not liked yet
        if(!this.state.status) {
            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes + 1,
                    status: true
                }
            });
        } 
        // Already liked
        else {
            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes - 1,
                    status: false
                }
            });
        }
    }

    render() {
        const buttonLabel = this.state.status ? "button button-like liked" : "button button-like" ;
        return (
            <div>
                <button className={buttonLabel} onClick={this.toggleLike}>
                    <i className="fa fa-heart"></i>
                    <span>Like</span>
                </button>
                <span className="counter">{this.state.likes}</span>
            </div>
        );
    }
}