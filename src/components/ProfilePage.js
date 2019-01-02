import React from 'react';

import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon } from 'mdbreact';
import { AuthContext } from './AuthProvider';
import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';

import Background from '../images/login_background_2.jpg';

import './card/style.css';

const colors = ['aqua-gradient', 'blue-gradient', 'purple-gradient', 'peach-gradient', 'dusty-grass-gradient'];

export const ProfilePage = () => {

    return (
        <AuthContext>
            {({ signOut }) => {
              
                return (
                    <div>
                        <NavbarPage logout={signOut} />
                        <BackgroundPage src={Background}>
                            <div className="card testimonial-card" style={{ maxWidth: "22rem" }}>
                                <div className={'card-up aqua-gradient'} />
                                <div className="testimonial-card" style={{ marginTop: '7%' }}>
                                    <div className="avatar mx-auto white square-image">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" className="rounded-circle img-responsive" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">George Washington</h4>
                                        <p>blablbalbl@fucktardMail.com</p>
                                        <hr />
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <a href="USERNAME/following" style={{ margin: '5%' }}>
                                                Following: 555
                                            </a>
                                            <a href="USERNAME/followers" style={{ margin: '5%' }}>
                                                Followers: 20
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </BackgroundPage>
                    </div>
                );
            }}
        </AuthContext>
    );
};