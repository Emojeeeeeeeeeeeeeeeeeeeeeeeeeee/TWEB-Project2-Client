import React from 'react';
import { Container } from 'mdbreact';

export class BackgroundPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isGrid: this.props.isGrid
        };
        //this.modifyBackgroundStyle = this.modifyBackgroundStyle.bind(this);
    }

    setBackgroundToGrid() {
        this.setState({
            isGrid: true
        });
    }

    setBackgrounToNoGrid() {
        this.setState({
            isGrid: false
        });
    }

    render() {
        const backgroundStyleGrid = {
            backgroundImage: `url(${this.props.src})`,
            backgroundSize: '70%',
            backgroundRepeat: 'repeatY',
            backgroundAttachement: 'fixed',
            height: '100%'    
        };

        const backgroundStyleNoGrid = {
            backgroundImage: `url(${this.props.src})`,
            width: '100%',
            backgroundSize: '90%',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center', 
            height: '100vh',
            /*backgroundSize: '70%',
            backgroundRepeat: 'repeat',
            backgroundAttachement: 'fixed',*/
            
        };
        

        const { children } = this.props;
        return (
            <Container fluid style={this.state.isGrid === true ? backgroundStyleGrid : backgroundStyleNoGrid}>
                {children}
            </Container>
        );
    }
}
