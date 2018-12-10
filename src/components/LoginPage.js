import React, { useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Redirect } from 'react-router-dom';

export const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <AuthContext>
            {({ error, user, signIn }) => {

                if (user) {
                    return <Redirect to="/" />
                }

                const onSubmit = (e) => {
                    e.preventDefault();
                    signIn({ username, password });
                };

                return (
                    <div>
                        <h1>LoginPage</h1>

                        <form onSubmit={onSubmit}>
                            <input 
                                type="text"
                                placeholder="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)} />
                            <br />
                            <input 
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                            <br />
                            <button type="submit">LOGIN</button>
                            <p style={{ color: 'red' }}>{error}</p>
                        </form>
                    </div>
                );
            }}
        </AuthContext>
    );
};

/*export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault(); // cancel default behaviour
    }
    
    render() {
        return (
            <AuthContext>
                {(authContext) => {
                    console.log(authContext);
                }}
                <h1>Login Page</h1>

                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        name="username"
                        placeholder="username" 
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button type="submit">LOGIN</button>
                </form>
            </AuthContext>
        );
    }
}*/