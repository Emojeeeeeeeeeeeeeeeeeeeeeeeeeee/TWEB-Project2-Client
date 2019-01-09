import React from 'react';
import { Container } from 'mdbreact';

export class BackgroundPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const backgroundStyleGrid = {
            backgroundImage: `url(${this.props.src})`,
            backgroundSize: '70%',
            backgroundRepeat: 'repeat',
            backgroundAttachement: 'fixed'           
        };

        const backgroundStyleNoGrid = {
            backgroundImage: `url(${this.props.src})`,
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeatY',
            backgroundPosition: 'center', 
            height: '100vh'
        };
        

        const { children } = this.props;
        return (
            <Container fluid style={this.props.isGrid === true ? backgroundStyleGrid : backgroundStyleNoGrid}>
                {children}
            </Container>
        );
    }
}