import React, { Component } from 'react';

import { FollowButton } from '../FollowButton/FollowButton';

import './style.css';

const colors = ['aqua-gradient', 'blue-gradient', 'purple-gradient', 'peach-gradient', 'dusty-grass-gradient'];

export class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardUpColor: "",
            avatar: this.props.avatar,
            username: this.props.username,
            email: this.props.email,
            following: this.props.following,
            followers: this.props.followers,
            followingCount: this.props.following === undefined ? 0 : this.props.following.length,
            followersCount: this.props.followers === undefined ? 0 : this.props.followers.length,
        };

        this.incFollow = this.incFollow.bind(this);
        this.decFollow = this.decFollow.bind(this);
    }

    componentWillMount() {
        console.log(this.state)
        console.log(this.props)
        this.setState({ 
            // set random card color
            cardUpColor: colors[Math.floor(Math.random() * colors.length)]
        }); 
    }

    incFollow() {
        this.setState({
            followersCount: this.state.followersCount + 1
        })
    }

    decFollow() {
        this.setState({
            followersCount: this.state.followersCount - 1
        })
    }

    render() {
        return (
            <div className="card testimonial-card" style={{ maxWidth: "22rem" }}>
                <div className={'card-up aqua-gradient'} />
                <div className="testimonial-card" style={{ marginTop: '7%' }}>
                    <div className="avatar mx-auto white square-image">
                        <img src={this.state.avatar} className="rounded-circle img-responsive" alt="" />
                    </div>
                    <div className="card-body">
                        <a href={`/u/${this.props.id}`}>
                            <h4 className="card-title">{this.state.username}</h4>
                        </a>
                        <p>{this.state.email}</p>
                        <hr />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="USERNAME/following" style={{ margin: '5%' }}>
                                Following: {this.state.followingCount}
                            </a>
                            <a href="USERNAME/followers" style={{ margin: '5%' }}>
                                Followers: {this.state.followersCount}
                            </a>
                        </div>
                        {this.props.displayFollowButton ? <FollowButton userId={this.props.id} followers={this.state.followers} incFollow={this.incFollow} decFollow={this.decFollow} /> : ''}            
                    </div>
                </div>
            </div>  
        );
    }
}