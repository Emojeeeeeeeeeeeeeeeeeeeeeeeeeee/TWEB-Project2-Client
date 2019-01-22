import React, { Component } from 'react';
import { Container, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter } from 'mdbreact';

import Background from '../images/woman_shrugging.png';

const style = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center', 
    height: '100vh'
};

export class ForgotPasswordPage extends Component {
    render() {
        return(
            <Container fluid style={style}>
                <MDBRow style={ { display: 'flex', justifyContent: 'center'} }>
                    <MDBCol size="4">
                        <MDBCard style={{marginTop: '20%'}}>
                            <MDBCardBody>
                                <h4>
                                    <span role="img" aria-label="facePalm">🤦</span> 
                                    <br />
                                    Ask your Mom. She knows everything 
                                </h4>
                            </MDBCardBody>

                            <MDBModalFooter>
                                <div className="font-weight-light">
                                    <a href="/login">
                                        <span role="img" aria-label="back">🔙 </span>
                                        to login 
                                        <span role="img" aria-label="page"> 📃</span>
                                    </a>
                                </div>
                            </MDBModalFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </Container>
        );
    }
}