import React, { useState } from 'react';

import { BackgroundPage } from './BackgroundPage';

import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn, MDBInput } from 'mdbreact';

const RegisterPage = () => {
    
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    return (
        <BackgroundPage>
            <MDBRow style={ { display: 'flex', justifyContent: 'center'} }>
                <MDBCol md="6">
                    <MDBCard style={{marginTop: '20%'}}>
                        <MDBCardBody>
                            <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                <h3 className="my-3">
                                    <MDBIcon icon="lock" /> Register:
                                </h3> 
                            </MDBCardHeader>

                            <form onSubmit={onSubmit}>
                                <div className="grey-text">
                                    <MDBInput 
                                        label="Type your 📧"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                    <MDBInput
                                        label="Type your username"
                                        icon="fa-user-circle"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)} />
                                    <MDBInput
                                        label="Type your 🔑"
                                        icon="lock"
                                        group
                                        type="password"                                            
                                        validate
                                        value={password1}
                                        onChange={e => setPassword1(e.target.value)} />
                                    <MDBInput
                                        label="type your 🔑 again"
                                        icon="lock"
                                        group
                                        type="password"                                            
                                        validate
                                        value={password2}
                                        onChange={e => setPassword2(e.target.value)} />
                                </div>
                                <div className="text-center mt-4">
                                    <MDBBtn
                                        color="light-blue"
                                        className="mb-3"
                                        type="submit">Register</MDBBtn>
                                </div>
                            </form>
                            <MDBModalFooter>
                                <div className="font-weight-light">
                                    <p>Back to login page</p>
                                </div>
                            </MDBModalFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </BackgroundPage>
        );
    
};