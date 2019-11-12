import React from 'react';
import '../App.css';
import { Route, withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute/PrivateRoute.js'
import Dashboard from './Dashboard/Dashboard.js'
import Register from './Register/Register.js'
import Login from './Login/Login.js'


function App() {
  return (
    <div className="App">
      <PrivateRoute exact path='/' component={Dashboard} />
      <PrivateRoute path='/onboarding' component={Dashboard} />
      <PrivateRoute path='/NewTask' component={Dashboard} />
      <PrivateRoute path='/taskList' component={Dashboard} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </div>
  );
}

export default withRouter(App);
