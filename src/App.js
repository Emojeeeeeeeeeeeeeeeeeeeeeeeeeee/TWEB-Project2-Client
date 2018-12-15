import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { RegisterPage } from './components/RegisterPage';

import { EmojiMessage } from './components/testMessage';
import { TestCardMessage } from './components/testCardMessage';

export default () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/test" component={EmojiMessage} />
      <Route path="/test2" component={TestCardMessage} />
    </Switch>
  );
};
