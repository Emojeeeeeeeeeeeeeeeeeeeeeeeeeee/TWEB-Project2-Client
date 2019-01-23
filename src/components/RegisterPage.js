import React, { useState } from 'react';
import { BackgroundPage } from './BackgroundPage';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn, MDBInput } from 'mdbreact';
import { toast, ToastContainer } from 'react-toastify';
import { sha256 } from 'js-sha256';

import Background from '../images/login_background_2.jpg';

import { createUser } from '../scripts/graphQL';

export const RegisterPage = () => {
    
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const notifySuccess = () => {
        toast('🦄 Account successfully registered !', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
            });
    }

    const notifyFailure = () => {
        toast('💩 Cannot register your account ! Email already exists or passwords don\'t match.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
            });
    }

    const onSubmit = (e) => {
      e.preventDefault();
      if(password1 === password2) {
        let info = {
          email: email,
          username: username,
          password: sha256(password1)
        }

        createUser(info.email, info.username, info.password).then(data => {
            if(data !== null) {
                setUsername('');
                notifySuccess();
                setTimeout(() => {
                    window.location.replace("/login");
                }, 3000); 
                
            }
            else {
                notifyFailure();
            }
            
            setEmail('');
            setPassword1('');
            setPassword2('');    
        })
    }
    else {
        notifyFailure();
    }
  };

    return (
        <BackgroundPage src={Background} isGrid={false}>
            <MDBRow style={ { display: 'flex', justifyContent: 'center'} }>
                <MDBCol md="4">
                    <MDBCard style={{marginTop: '20%'}}>
                        <MDBCardBody>
                            <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                <h3 className="my-3">
                                    <MDBIcon icon="lock" /> Register:
                                </h3> 
                            </MDBCardHeader>

                            <form onSubmit={onSubmit}>
                                <div className="grey-text" style={{ textAlign: 'left' }}>
                                    <MDBInput 
                                        label="✍ your 📧"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        required
                                        error="wrong"
                                        success="right"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                    <MDBInput
                                        label="✍ your username"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        required
                                        error="wrong"
                                        success="right"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)} />
                                    <MDBInput
                                        label="✍ your 🔑"
                                        icon="lock"
                                        group
                                        type="password"                                            
                                        validate
                                        required
                                        value={password1}
                                        onChange={e => setPassword1(e.target.value)} />
                                    <MDBInput
                                        label="✍ your 🔑 again"
                                        icon="lock"
                                        group
                                        type="password"                                            
                                        validate
                                        required
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
                                    <a href="/login">
                                        <span role="img" aria-label="back">🔙 </span>
                                        to login 
                                        <span role="img" aria-label="page"> 📃</span>
                                    </a>
                                </div>
                            </MDBModalFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover/>
        </BackgroundPage>
        );
 
};