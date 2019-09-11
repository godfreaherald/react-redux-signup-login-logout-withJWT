import React from 'react';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import SignUp from './components/SignUp'
import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css'; //gwa added on 20190911 to activate Bootstrap

function App() {
  return (
    <Router >
    <div className="container">
    <NavigationBar/>
    <Switch>
      <Route path ='/signup' component ={SignUp}/>
      <Route path ='/' component ={Home}/>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
