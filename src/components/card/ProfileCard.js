import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FollowButton } from '../FollowButton/FollowButton';

import './style.css';
import { getUser } from '../../scripts/graphQL';

const colors = ['aqua-gradient', 'blue-gradient', 'purple-gradient', 'peach-gradient', 'dusty-grass-gradient'];

export class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardUpColor: "",
            id: this.props.id,
            avatar: this.props.avatar,
            username: this.props.username,
            email: this.props.email,
            following: this.props.following === undefined ? [] : this.props.following,
            followers: this.props.followers === undefined ? [] : this.props.followers,
            followingCount: this.props.following === undefined ? 0 : this.props.following.length,
            followersCount: this.props.followers === undefined ? 0 : this.props.followers.length,
        };

        this.updateCard = this.updateCard.bind(this);
    }

    componentWillMount() {
        this.setState({ 
            // set random card color
            cardUpColor: colors[Math.floor(Math.random() * colors.length)]
        }); 
    }

    componentWillReceiveProps({avatar}){
        this.setState({
            avatar
        })
    }

    async updateCard() {
        await getUser(this.state.id)
        .then(res => {
            this.setState({
                avatar: res.image,
                username: res.username,
                email: res.email,
                following: res.following === undefined ? [] : res.following,
                followers: res.followers === undefined ? [] : res.followers,
                followingCount: res.following === undefined ? 0 : res.following.length,
                followersCount: res.followers === undefined ? 0 : res.followers.length,
            })
        })
    }

    render() {
        return (
            <div className="card testimonial-card" style={{ maxWidth: "22rem", marginLeft: 'auto', marginRight: 'auto' }}>
                <div className={`card-up ${this.state.cardUpColor}`} />
                <div className="testimonial-card" style={{ marginTop: '7%' }}>
                    <div className="avatar mx-auto white square-image">
                        <img src={this.state.avatar} className="rounded-circle img-responsive" alt="" />
                    </div>
                    <div className="card-body">
                        <Link to={{
                           pathname: '/profile',
                           state: {
                               id: this.state.id
                           } 
                        }}>
                            <h4 className="card-title">{this.state.username}</h4>
                        </Link>
                        <p>{this.state.email}</p>
                        <hr />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Link to={{
                                pathname: '/following',
                                state: {
                                    users: this.state.following
                                }
                            }}
                            style={{ margin: '5%' , marginRight: 'auto', fontWeight: 'bold' }}>
                                Following: {this.state.followingCount}
                            </Link>
                            <Link to={{
                                pathname: '/followers',
                                state: {
                                    users: this.state.followers
                                }
                            }}
                            style={{ margin: '5%', marginLeft: 'auto', fontWeight: 'bold' }}>
                                Followers: {this.state.followersCount}
                            </Link>
                        </div>
                        {this.props.displayFollowButton ? <FollowButton userId={this.props.id} followers={this.state.followers} updateCard={this.updateCard} /> : ''}            
                    </div>
                </div>
            </div>  
        );
    }
}