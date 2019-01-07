import React, { Component } from 'react';

import { FollowButton } from '../FollowButton/FollowButton';

import './style.css';

const colors = ['aqua-gradient', 'blue-gradient', 'purple-gradient', 'peach-gradient', 'dusty-grass-gradient'];

export class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardUpColor: ""
        };
    }

    componentWillMount() {
        this.setState({ 
            // set random card color
            cardUpColor: colors[Math.floor(Math.random() * colors.length)]
        }); 
    }

    render() {
        return (
            <div className="card testimonial-card" style={{ maxWidth: "22rem" }}>
                <div className={'card-up aqua-gradient'} />
                <div className="testimonial-card" style={{ marginTop: '7%' }}>
                    <div className="avatar mx-auto white square-image">
                        <img src={this.props.avatar} className="rounded-circle img-responsive" alt="" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.username}</h4>
                        <p>{this.props.email}</p>
                        <hr />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="USERNAME/following" style={{ margin: '5%' }}>
                                Following: {this.props.following}
                            </a>
                            <a href="USERNAME/followers" style={{ margin: '5%' }}>
                                Followers: {this.props.followers}
                            </a>
                        </div>
                        <FollowButton />            
                    </div>
                </div>
            </div>  
        );
    }
}