import React, { useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Redirect } from 'react-router-dom';
import Background from '../images/login_background_2.jpg';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
  } from 'mdbreact';

export const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const backgroundStyle = {
        backgroundImage: `url(${Background})`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
    }

    return (
        <AuthContext>
            {({ error, user, signIn }) => {

                if (user) {
                    return <Redirect to="/" />
                }

                const onSubmit = (e) => {
                    e.preventDefault();
                    signIn({ email, password });
                };

                return (
                    <MDBContainer style={backgroundStyle}>
                        <MDBRow style={ { display: 'flex', justifyContent: 'center'} }>
                            <MDBCol md="6">
                                <MDBCard style={{marginTop: '20%'}}>
                                    <MDBCardBody>
                                        <h1 className="my-1" style={ { textAlign: 'center'} }>
                                            Happy
                                            <span role="img" aria-label="happyFace1">😙</span>
                                            <span role="img" aria-label="happyFace2">😺</span>
                                            <span role="img" aria-label="happyFace3">👻</span>
                                        </h1> 
                                        <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                            <h3 className="my-3">
                                                <MDBIcon icon="lock" /> Login:
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
                                                    label="Type your 🔑"
                                                    icon="lock"
                                                    group
                                                    type="password"
                                                    validate
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)} />
                                            </div>
                                            <div className="text-center mt-4">
                                                <MDBBtn
                                                    color="light-blue"
                                                    className="mb-3"
                                                    type="submit">Login</MDBBtn>
                                            </div>
                                        </form>
                                        <MDBModalFooter>
                                            <div className="font-weight-light">
                                                <p>Not a 
                                                    <span role="img" aria-label="member"> 👪</span> 
                                                    ? Sign 
                                                    <span role="img" aria-label="up"> 🆙</span>
                                                </p>
                                                <p>Forgot 
                                                    <span role="img" aria-label="password"> 🔑</span>
                                                     ?
                                                </p>
                                            </div>
                                        </MDBModalFooter>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                );
            }}
        </AuthContext>
    );
};