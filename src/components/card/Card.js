import React, { Component } from 'react';

import './style.css';

const colors = ['aqua-gradient'];

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardUpColor: ""
        };
    }

    componentWillMount() {
        this.setState = { 
            // set random card color
            cardUpColor: colors[Math.floor(Math.random() * colors.length)]
        }; 
    }

    render() {
        return (
            
            /*<div className="card-container">*/
              <div className="card testimonial-card" style={{ maxWidth: "22rem" }}>
                <div className="card-up aqua-gradient" />
                <div className="avatar mx-auto white square-image">
                  <img
                    src={this.props.avatar}
                    className="rounded-circle img-responsive"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{this.props.username}</h4>
                  <hr />
                  <p>{this.props.messageContent}</p>
                </div>
              </div>
            /*</div>*/
          
          );
    }
}