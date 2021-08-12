import React, { Fragment } from 'react'
import { Link, Switch } from 'react-router-dom';
import './App.css';
import ReactDOM from 'react-dom'
import { Adminlanding } from './component/Admin/Adminlandin'
import Navbar from './component/layout/navbar'
import Footer from './component/layout/footer';
import Cards from './component/layout/card';
import AdminRegister from "./component/admin-auth/AdminRegister"
import AdminLogin from './component/admin-auth/AdminLogin';
import UserLogin from './component/user-auth/UserLogin';
import UserSignup from './component/user-auth/UserSignup';
import Landing from './component/layout/landing';
import Tickets from './component/TicketLayout/ticket';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/admin-register' component={AdminRegister} />
        <Route exact path='/admin-login' component={AdminLogin} />
        <Route exact path='/user-login' component={UserLogin} />
        <Route exact path='/user-register' component={UserSignup} />
        <Route exat path='/tickets' component={Tickets}/>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/" component={Cards} />
        <Route exact path="/" component={Footer} />
        <Switch>
          <Route exact path="/admin-landing" component={Adminlanding} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
