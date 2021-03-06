import React, { Component } from 'react';
import axios from 'axios';
import {App} from '../App';
import { Redirect } from 'react-router-dom';
import { sha256 } from 'js-sha256';

const {Provider: AuthContextProvider, Consumer: AuthContext} = React.createContext();



class AuthProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            error: null,
            signIn: this.signIn,
            signOut: this.signOut,
            getMessages: this.getMessages,
            hasLoad : false
        }
    }

    componentWillMount() {
        const token = window.localStorage.getItem('token');
        this.setState({ user : "tempUser" });
        if (token) {
            axios.get('/api/me', {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            .then(response => {
                const { user } = response.data;
                this.setState({ user, hasLoad : true });
            })
            .catch(err => {
                console.error(err);
                localStorage.removeItem('token');
            })
        }
        else{
            this.setState({
                hasLoad : true,
                user : null
            })
        }
    }

    signIn = ({ email, password }) => {
        password = sha256(password);
        axios.post('/auth/login', { email, password })
            .then(response => {
                const { user, token } = response.data;
                window.localStorage.setItem('token', token);
                window.localStorage.setItem('user_id', user._id);
                this.setState({ user });
            })
            .catch(error => {
                console.error(error);
                this.setState({ error: 'Invalid email or password' });
            })
    }

    signOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        window.location.reload();
        return <Redirect to="/" />
    }

    render() {
        const { children } = this.props;

        // value = all values given to children
        return (
            <AuthContextProvider value={this.state} > 
                <App value={this.state}/>
            </AuthContextProvider>
        );
    }
}

export { AuthContext };
export default AuthProvider;
