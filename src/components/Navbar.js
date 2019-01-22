import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, MDBDropdownItem, Fa } from "mdbreact";
import { Link, Redirect } from 'react-router-dom';

import { getUser } from '../scripts/graphQL';
import Logout from '../images/logout.png';

export class NavbarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: "",
            image: "",
            input: "",
            redirect: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.loadUserImage();
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.input !== "") {
            window.localStorage.setItem('search_username', this.state.input);
            window.location.replace("/search");
        }        
    }

    handleInputChange(e) {
        this.setState({
            input: e.target.value
        });
    }

    async loadUserImage() {
        let user;
        await getUser(localStorage.getItem('user_id')).then(res => {
            user = res;
        });
        this.setState({
            image: user.image
        });
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    render() {
        return (
                <Navbar color="secondary-color" dark expand="md">
                    <NavbarBrand>
                        <strong className="white-text">
                            Happy
                            <span role="img" aria-label="happyFace1">😙</span>
                            <span role="img" aria-label="happyFace2">😺</span>
                            <span role="img" aria-label="happyFace3">👻</span>
                        </strong>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                    <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        <NavbarNav left style={{ fontSize: '2rem' }}>
                            <NavItem active>
                             <NavLink to={{
                                        pathname: '/',
                                        state: {
                                            personnal: false
                                        },
                                        query : {
                                            personnal: false
                                        }
                                    }}>
                                    <span role="img" aria-label="home">🏠</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/newMessage">
                                    <span role="img" aria-label="newMessage">💬</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  className="waves-effect waves-light d-flex align-items-center"
                                to={{
                                    pathname: '/profile',
                                    state: {
                                        id: localStorage.getItem('user_id')
                                    }
                                    }}>
                                    <span role="img" aria-label="favorite"><img src={this.state.image} className="rounded-circle z-depth-0" style={{height: '35px', width: '35px', padding: 0}} alt="" /></span>
                                </NavLink>
                            </NavItem> 
                        </NavbarNav>

                        <NavbarNav middle="true">
                            <NavItem>
                                <FormInline waves onSubmit={this.onSubmit}>
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" value={this.state.input} onChange={this.handleInputChange} placeholder="🔎👪" aria-label="Search" />
                                    </div>
                                </FormInline>
                            </NavItem>
                        </NavbarNav>

                        <NavbarNav right>
                            <NavItem>
                                <NavLink  className="waves-effect waves-light d-flex align-items-center"
                                    to={{
                                        pathname: '/',
                                        state: {
                                            personnal: true
                                        }
                                        }}
                                    style={{ fontSize: '1.75rem' }}>
                                    my<Fa icon="envelope" className="ml-1" />
                                </NavLink>
                            </NavItem> 
                            <NavItem>
                                <NavLink  className="waves-effect waves-light d-flex align-items-center"
                                    to={{
                                        pathname: '/favorite',
                                        state: {
                                            personnal: true
                                        }
                                        }}
                                    style={{ fontSize: '1.75rem' }}>
                                    my<span role="img" aria-label="favorite">❤️</span>
                                </NavLink>
                            </NavItem> 
                            <NavItem>
                                <Dropdown>
                                    <DropdownToggle caret className="dopdown-toggle" nav>
                                        <img src={Logout} className="rounded-circle z-depth-0" style={{height: '35px', width: '35px', padding: 0}} alt=""/>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-default" right>
                                        <MDBDropdownItem onClick={this.props.logout}>Logout</MDBDropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
        );
    }
}