import React, { Component } from 'react';

import { NavbarPage } from './Navbar';
import { BackgroundPage } from './BackgroundPage';

import Background from '../images/login_background_2.jpg';

export class SearchPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarPage />
                <BackgroundPage src={Background}>

                </BackgroundPage>
            </div>
        );
    }
}