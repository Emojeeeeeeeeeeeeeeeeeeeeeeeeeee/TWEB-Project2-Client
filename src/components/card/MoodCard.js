import React, { Component } from 'react';
import { MDBBtn, MDBCardHeader } from 'mdbreact';

import { updateMood } from '../../scripts/graphQL';

import './style.css'

export class MoodCard extends Component {

    constructor(props){
        super(props)

        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(e) {
        this.props.changeImage(e.target.value);
    }

    componentWillReceiveProps(){
        console.log("update image")
    }

    render() {
        return(
            <div className="card mood" style={{ maxWidth: "26rem", marginLeft: 'auto', marginRight: 'auto',  marginTop: '7%' }}>
                <MDBCardHeader className="form-header rounded">
                    <h2 className="my-3" id="moodText">
                        Mood:
                    </h2> 
                </MDBCardHeader>
                <div className="mood" style={{ marginTop: '0%' }}>
                    <div className="card-body">
                        <MDBBtn rounded color="pink" onClick={this.handleButton} value="happy">Happy</MDBBtn>
                        <MDBBtn rounded color="mdb-color" onClick={this.handleButton} value="sad">Sad</MDBBtn>
                        <MDBBtn rounded color="yellow" onClick={this.handleButton} value="bored">Bored</MDBBtn>
                        <MDBBtn rounded color="warning" onClick={this.handleButton} value="monkey">Monkey</MDBBtn>
                        <MDBBtn rounded onClick={this.handleButton} value="tired">Tired</MDBBtn>
                        <MDBBtn rounded color="danger" onClick={this.handleButton} value="angry">Angry</MDBBtn>
                        <MDBBtn rounded color="pink" onClick={this.handleButton} value="inlove">In Love</MDBBtn>
                        <MDBBtn rounded color="dark-green" onClick={this.handleButton} value="needmoney">I need Money</MDBBtn>
                        <MDBBtn rounded color="blue-grey" onClick={this.handleButton} value="old">I'm too Old for this 💩</MDBBtn>
                        <MDBBtn rounded color="cyan" onClick={this.handleButton} value="underthesea">I'm a fish</MDBBtn>
                        <MDBBtn rounded color="red" onClick={this.handleButton} value="surpriseme">Surprise Me !</MDBBtn>
                    </div>
                </div>
            </div>
        );
    }
}