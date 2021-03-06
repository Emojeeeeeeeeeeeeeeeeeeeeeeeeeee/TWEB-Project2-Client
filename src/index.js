import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {App} from './App';
import AuthProvider from './components/AuthProvider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
    <AuthProvider>
    </AuthProvider>
</BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
