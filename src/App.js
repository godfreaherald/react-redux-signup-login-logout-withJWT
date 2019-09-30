import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import Home from './components/Home';
import { history } from './_helpers';

function App() {
  return (
    <Router history={history}>
      <div className="container">
        <NavigationBar />
        <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
