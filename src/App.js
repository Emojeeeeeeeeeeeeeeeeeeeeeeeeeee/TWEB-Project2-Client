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

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hasLoad : this.props.value
    }
    console.log("constructor APP")
    console.log(this.props)
  }

  componentWillReceiveProps(value) {
    this.setState({hasLoad : value})
  }

  render() {
    if(!this.state.hasLoad){
      console.log(false)
      return <WaitingPage />
    }
    else{
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <ProtectedRoute path="/newMessage" component={NewMessagePage} />
      <ProtectedRoute path="/profile" component={ProfilePage} />
      <ProtectedRoute path="/search" component={SearchPage} />
      <ProtectedRoute path="/following" component={FollowingPage} />
      <ProtectedRoute path="/followers" component={FollowingPage} />
    </Switch>
  );
};
  }
}
