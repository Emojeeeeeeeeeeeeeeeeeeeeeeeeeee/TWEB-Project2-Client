import React, { Component } from 'react';
import { MDBBtn, MDBCardHeader } from 'mdbreact';

import { updateMood } from '../../scripts/graphQL';

import './style.css'

export class MoodCard extends Component {

    handleButton(e) {
        const userId = localStorage.getItem('user_id');
        const mood = e.target.value;
        updateMood(userId, mood);
        window.location.reload();
    }

    render() {
        return(
            <div className="card testimonial-card" style={{ maxWidth: "22rem", marginLeft: 'auto', marginRight: 'auto' }}>
                <MDBCardHeader className="form-header rounded">
                    <h2 className="my-3" id="mood">
                        Mood:
                    </h2> 
                </MDBCardHeader>
                <div className="testimonial-card" style={{ marginTop: '7%' }}>
                    <div className="card-body">
                        <MDBBtn rounded color="pink" onClick={this.handleButton} value="happy">Happy</MDBBtn>
                        <MDBBtn rounded color="mdb-color" onClick={this.handleButton} value="sad">Sad</MDBBtn>
                        <MDBBtn rounded color="yellow" onClick={this.handleButton} value="bored">Bored</MDBBtn>
                        <MDBBtn rounded color="warning" onClick={this.handleButton} value="monkey">Monkey</MDBBtn>
                        <MDBBtn rounded onClick={this.handleButton} value="tired">Tired</MDBBtn>
                        <MDBBtn rounded color="danger" onClick={this.handleButton} value="angry">Angry</MDBBtn>
                        <MDBBtn rounded color="pink" onClick={this.handleButton} value="inlove">In Love</MDBBtn>
                        <MDBBtn rounded color="dark-green" onClick={this.handleButton} value="needmoney">I need Money</MDBBtn>
                        <MDBBtn rounded color="blue-grey" onClick={this.handleButton} value="old">Old</MDBBtn>
                        <MDBBtn rounded color="cyan" onClick={this.handleButton} value="angry">I'm a fish</MDBBtn>
                    </div>
                </div>
            </div>
        );
    }
}