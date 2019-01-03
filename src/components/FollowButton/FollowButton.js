import React, { Component } from 'react';

import './style.css';

export class FollowButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
        this.toggleFollow = this.toggleFollow.bind(this);
    }

    toggleFollow() {
         // Not followed yet
         if(!this.state.status) {
            this.setState((prevState, props) => {
                return {
                    status: true
                }
            });
        } 
        // Already followed
        else {
            this.setState((prevState, props) => {
                return {
                    status: false
                }
            });
        }
    }

    render() {
        const buttonLabel = this.state.status ? "button button-follow followed " : "button button-follow" ;
        const buttonText =  this.state.status ? <span>Followed</span> : <span>Follow</span>;
        return (
            <div>
                <button className={buttonLabel} onClick={this.toggleFollow}>
                    <i className="fa fa-arrow-circle-o-right"></i>
                    {buttonText}
                </button>
            </div>
        );
    }
}