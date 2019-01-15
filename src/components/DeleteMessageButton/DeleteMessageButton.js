import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';

import { deleteMessage } from '../../scripts/graphQL';

import './style.css';

export class DeleteMessageButton extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        deleteMessage(this.props.messageId, localStorage.getItem('user_id'));
        window.location.reload();
    }

    render() {
        return(
            <button className="deleteButton" onClick={this.handleDelete}> 
                <MDBIcon icon="close" size="sm"/>
            </button>
        );
    }
}