import React, { Component } from 'react';
import axios from 'axios';

const {Provider: AuthContextProvider, Consumer: AuthContext} = React.createContext();



class AuthProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            error: null,
            signIn: this.signIn,
            signOut: this.signOut,
            getMessages: this.getMessages
        }
    }

    componentDidMount() {
        const token = window.localStorage.getItem('token');
        if (token) {
            axios.get('/api/me', {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            .then(response => {
                const { user } = response.data;
                this.setState({ user });
            })
            .catch(err => {
                console.log(err);
                localStorage.removeItem('token');
            })
        }
    }

    signIn = ({ email, password }) => {
        axios.post('/auth/login', { email, password })
            .then(response => {
                const { user, token } = response.data;
                window.localStorage.setItem('token', token);
                this.setState({ user });
            })
            .catch(error => {
                console.error(error);
                this.setState({ error: 'Invalid email or password' });
            })
    }

    signOut() {
        localStorage.removeItem('token');
        window.location.reload();
    }

    getMessages() {
        console.log('getting messages for ' + this.state.user.email);
        
        const GET_MESSAGES_QUERY = `
        {
            getMessagesFromDB(email: ${this.state.user.email}, offset: 0) {
              content
              author
              like
              timestamp
            }
          }`;

        axios.get('http://localhost:3000/graphql?query=' + GET_MESSAGES_QUERY)
            .then(res => console.log(res.json()));
    }

    render() {
        const { children } = this.props;

        // value = all values given to children
        return (
            <AuthContextProvider value={this.state}> 
                {children}
            </AuthContextProvider>
        );
    }
}

export { AuthContext };
export default AuthProvider;
