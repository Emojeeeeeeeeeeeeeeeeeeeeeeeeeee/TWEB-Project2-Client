import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import { confirmAlert } from 'react-confirm-alert'; 

import { deleteMessage } from '../../scripts/graphQL';

import 'react-confirm-alert/src/react-confirm-alert.css' 
import './style.css';
 
export class DeleteMessageButton extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.deleteConfirmation = this.deleteConfirmation.bind(this);
    }

    deleteConfirmation() {
        confirmAlert({
            customUI: ({ onClose}) => {
                return (
                    <div className="custom-ui">
                        <h1><span role="img" aria-label="deleteCross">❌</span> confirmation</h1>
                        <p>
                            Are you sure to delete your 
                            <span role="img" aria-label="messageBubble">💬</span> 
                            <span role="img" aria-label="questionMark">❓</span>
                        </p>
                        <button className="confirmButton" onClick={this.handleDelete}>
                            <span role="img" aria-label="thumbup">👍</span>
                        </button>
                        <button className="confirmButton" onClick={onClose}>
                            <span role="img" aria-label="thumbdown">👎</span>
                        </button>
                    </div>
                )
            }
        })
    }

    handleDelete() {
        deleteMessage(this.props.messageId, localStorage.getItem('user_id'));
        window.location.reload();
    }

    render() {
        return(
            <button className="deleteButton" onClick={this.deleteConfirmation}> 
                <MDBIcon icon="close" size="sm"/>
            </button>
        );
    }
}