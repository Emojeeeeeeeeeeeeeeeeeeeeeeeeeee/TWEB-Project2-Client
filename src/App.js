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

export default () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <ProtectedRoute path="/newMessage" component={NewMessagePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/following" component={FollowingPage} />
      <Route path="/followers" component={FollowingPage} />
    </Switch>
  );
};
