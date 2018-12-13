import React from 'react';
import { Container } from 'mdbreact';
import Background from '../images/login_background_2.jpg';

const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center', 
    height: '100vh'
};

export class BackgroundPage extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <Container style={backgroundStyle}>
                {children}
            </Container>
        );
    }
}