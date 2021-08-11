import './App.css';
import React from 'react'
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
        {/* <Navbar/> */}
      </Router>
    </div>
    
  );
}

export default App;
