import React from 'react';
import { Container } from 'mdbreact';

export class BackgroundPage extends React.Component {
    render() {
        const backgroundStyle = {
            backgroundImage: `url(${this.props.src})`,
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeatY',
            backgroundPosition: 'center', 
            height: '100vh'
        };

        const { children } = this.props;
        return (
            <Container fluid style={backgroundStyle}>
                {children}
            </Container>
        );
    }
}