import React,{Fragment} from 'react'
import './App.css';
<<<<<<< HEAD
import ReactDOM from 'react-dom'
import Navbar from './component/layout/navbar'
import AdminRegister from "./component/admin-auth/AdminRegister"
import AdminLogin from './component/admin-auth/AdminLogin';
import UserLogin from './component/user-auth/UserLogin';
import UserSignup from './component/user-auth/UserSignup';
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
=======
import React , { Fragment }from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './component/layout/navbar'
import Landing from './component/layout/landing'
import Cards from './component/layout/card'
import Footer from './component/layout/footer'

import { Adminlanding } from './component/Admin/Adminlandin';

function App() {
  return (
    
   
      <Router>
         <Fragment className="App">
>>>>>>> 6ef1b0159fe8c35104d9fbd0d32667d3718ce2af
        <Navbar/>
       
        <Route exact path="/" component={Landing}/>
        <Route exact path="/" component={Cards} />
        <Route exact path="/" component={Footer}/>
        
        <Switch>
            <Route exact path="/admin-landing" component={Adminlanding }/>
        </Switch>
      </Fragment>
      </Router>
<<<<<<< HEAD
      </div>
=======
      
    

    
>>>>>>> 6ef1b0159fe8c35104d9fbd0d32667d3718ce2af
  );
}

export default App;
