import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
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
