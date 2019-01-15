import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { RegisterPage } from './components/RegisterPage';
import { ProfilePage } from './components/ProfilePage';
import { NewMessagePage } from './components/NewMessagePage';
import { SearchPage } from './components/SearchPage';
import { FollowingPage } from './components/FollowingPage';
import { WaitingPage } from './components/WaitingPage';
import { ForgotPasswordPage } from './components/ForgotPasswordPage';

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        user: null,
        error: null,
        signIn: this.signIn,
        signOut: this.signOut,
        getMessages: this.getMessages,
        hasLoad : false
    }
    console.log("constructor APP")
    console.log(this.props)
  }

  componentWillReceiveProps(value) {
    this.setState(value)
    console.log(value)
  }

  render() {
    if(!this.props.value.hasLoad){
      console.log(false)
      return <WaitingPage />
    }
    else{
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={HomePage} signOut={this.state.signOut} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/oopsPassword" component={ForgotPasswordPage} />
      <ProtectedRoute path="/newMessage" component={NewMessagePage} signOut={this.state.signOut} />
      <ProtectedRoute path="/profile" component={ProfilePage} signOut={this.state.signOut} />
      <ProtectedRoute path="/search" component={SearchPage} signOut={this.state.signOut} />
      <ProtectedRoute path="/following" component={FollowingPage} signOut={this.state.signOut} />
      <ProtectedRoute path="/followers" component={FollowingPage} signOut={this.state.signOut} />
    </Switch>
  );
};
  }
}
