import React from 'react';
import { Container } from 'mdbreact';
import Background from '../images/login_background_3.png';

const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeatY',
    backgroundPosition: 'center', 
    height: '100vh'
};

export class BackgroundPage extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <Container fluid style={backgroundStyle}>
                {children}
            </Container>
        );
    }
}