import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getUser } from '../../scripts/graphQL';
import { ProfileCard } from '../card/ProfileCard';

import './style.css';

const fetchLength = 9;

export class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            currentUsers: [],
            usersToDisplay: [],
            index: fetchLength,
            hasLoad: false,
        };
        this.fetchMoreUsers = this.fetchMoreUsers.bind(this);
        this.renderUsers = this.renderUsers.bind(this);
    }

    componentDidMount() {
        if(this.state.hasLoad === false) {
            this.props.users.then(response => {
                if(response !== null && response !== undefined) {
                    this.setState({
                        allUsers: response,
                        currentUsers: response.slice(0, fetchLength),
                        hasLoad: true
                    });
                    this.renderUsers(this.state.currentUsers);
                }
                else {
                    this.setState({
                        usersToDisplay: (
                            <h4>No users found</h4>
                        )
                    });
                }
            }).catch();
        }
    }

    fetchMoreUsers() {
        var State = this;
        setTimeout(() => {
            if(State.state.hasLoad && State.state.currentUsers.length < State.state.allUsers.length) {
                this.setState({
                    currentMessages: State.state.allUsers.slice(0, State.state.index + fetchLength),
                    index: State.state.index + fetchLength,
                })
                this.renderMessages(State.state.currentUsers)
            }
        }, 1500);
    }

    async renderUsers(arrayToRender) {
        let table = [];
        for(let i = 0; i < arrayToRender.length; i+=3) {
            if(arrayToRender[i].user === undefined){
            await getUser(arrayToRender[i].id)
            .then(res => arrayToRender[i].user = res);
            }
            if((i+2) < arrayToRender.length) {
                if(arrayToRender[i+1].user === undefined) {
                await getUser(arrayToRender[i+1].id)
                .then(res => arrayToRender[i+1].user = res);
                }
                if(arrayToRender[i+2].user === undefined) {
                    await getUser(arrayToRender[i+2].id)
                    .then(res => arrayToRender[i+2].user = res);
                }
                table.push(
                    <MDBRow>
                        <MDBCol size="4">
                            <ProfileCard
                                avatar={arrayToRender[i].user.image}
                                username={arrayToRender[i].user.username}
                                email={arrayToRender[i].user.email}
                                following={arrayToRender[i].user.followed}
                                followers={arrayToRender[i].user.followers} />
                        </MDBCol>
                        <MDBCol size="4">
                            <ProfileCard
                                avatar={arrayToRender[i+1].user.image}
                                username={arrayToRender[i+1].user.username}
                                email={arrayToRender[i+1].user.email}
                                following={arrayToRender[i+1].user.followed}
                                followers={arrayToRender[i+1].user.followers} />
                        </MDBCol>
                        <MDBCol size="4">
                            <ProfileCard
                                avatar={arrayToRender[i+2].user.image}
                                username={arrayToRender[i+2].user.username}
                                email={arrayToRender[i+2].user.email}
                                following={arrayToRender[i+2].user.followed}
                                followers={arrayToRender[i+2].user.followers} />
                        </MDBCol>
                    </MDBRow>
                );
            }
            else if((i+1) < arrayToRender.length) {
                if(arrayToRender[i+1].user === undefined) {
                    await getUser(arrayToRender[i+1].id)
                    .then(res => arrayToRender[i+1].user = res);
                }
                table.push(
                    <MDBRow>
                       <MDBCol size="4">
                            <ProfileCard
                                avatar={arrayToRender[i].user.image}
                                username={arrayToRender[i].user.username}
                                email={arrayToRender[i].user.email}
                                following={arrayToRender[i].user.followed}
                                followers={arrayToRender[i].user.followers} />
                        </MDBCol>
                        <MDBCol size="4">
                            <ProfileCard
                                avatar={arrayToRender[i+1].user.image}
                                username={arrayToRender[i+1].user.username}
                                email={arrayToRender[i+1].user.email}
                                following={arrayToRender[i+1].user.followed}
                                followers={arrayToRender[i+1].user.followers} />
                        </MDBCol> 
                    </MDBRow>
                );
            }
            else {
                table.push(
                    <MDBRow>
                      <MDBCol size="4">
                        <ProfileCard
                            avatar={arrayToRender[i].user.image}
                            username={arrayToRender[i].user.username}
                            email={arrayToRender[i].user.email}
                            following={arrayToRender[i].user.followed}
                            followers={arrayToRender[i].user.followers} />
                        </MDBCol>  
                    </MDBRow>
                );
            }
        }
        
        this.setState({
            usersToDisplay: table
        });
    }

    render() {
        return (
            <InfiniteScroll
                dataLength={this.state.currentUsers.length}
                next={this.fetchMoreUsers}
                hasMore={!(this.state.currentUsers.length === this.state.allUsers.length)}
                loader={<h4>Loading...</h4>}
            >
            {this.state.usersToDisplay}
            </InfiniteScroll>
        );
    }
}