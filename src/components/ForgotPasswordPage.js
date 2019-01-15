import React, { Component } from 'react';

import { BackgroundPage } from './BackgroundPage';

import Background from '../images/login_background_2.jpg';

export class ForgotPasswordPage extends Component {
    render() {
        return(
            <BackgroundPage src={Background} isGrid={false}>
                
            </BackgroundPage>
        );
    }
}