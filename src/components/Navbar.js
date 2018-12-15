import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";

export class NavbarPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: ""
        }
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    render() {
        return (
                <Navbar color="secondary-color" dark expand="md" style={{marginTop: '20px'}}>
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
                        <NavbarNav left>
                            <NavItem active>
                                <NavLink to="#!">
                                <span role="img" aria-label="home">🏠</span>
                                </NavLink>
                            </NavItem>
                        </NavbarNav>

                        <NavbarNav middle>
                            <NavItem>
                                <FormInline waves>
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="🔎👪" aria-label="Search" />
                                    </div>
                                </FormInline>
                            </NavItem>
                        </NavbarNav>

                        <NavbarNav right>
                            <NavItem>
                                <NavLink className="waves-effect waves-light d-flex align-items-center" to="#!">1<Fa icon="envelope" className="ml-1" /></NavLink>
                            </NavItem> 
                            <NavItem>
                                <Dropdown>
                                    <DropdownToggle className="dopdown-toggle" nav>
                                        <img src="http://a69.g.akamai.net/n/69/10688/v1/img5.allocine.fr/acmedia/medias/nmedia/18/90/07/03/20079741.jpg" className="rounded-circle z-depth-0" style={{height: '35px', width: '35px', padding: 0}} alt="" />
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-default" right>
                                        <DropdownItem href="#!">My Profile</DropdownItem>
                                        <DropdownItem href="#!">Settings</DropdownItem>
                                        <DropdownItem onClick={this.props.logout}>Logout</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
        );
    }
}