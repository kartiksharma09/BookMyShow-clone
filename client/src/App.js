import React, { Fragment,useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/layout/navbar';
import Landing from './component/layout/landing';
import Cards from './component/layout/card';
import {Provider} from 'react-redux';
import store from './store';
// import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import Footer from './component/layout/footer';
import { AdminDashBoard } from './component/Admin/adminDashBoard';
import {Ticket} from "./component/layout/ticket";
import { Adminlanding } from './component/Admin/Adminlandin';
import  AdminRegister  from './component/Admin-auth/AdminRegister'
import AdminLogin from './component/Admin-auth/AdminLogin';
import UserLogin from './component/user-auth/UserLogin'
import UserSignup from './component/user-auth/UserSignup'



if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // },[])

  return (
    <Provider store={store}>
    <Router>
      <Fragment className='App'>
        <Navbar />

        <Route exact path='/' component={Landing} />
        <Route exact path='/' component={Cards} />
        {/* <Route exact path='/' component={Footer} /> */}
        
        <Switch>
        <Route exact path='/user-signUp' component={UserSignup} />
          <Route exact path='/user-login' component={UserLogin} />
          <Route exact path='/final-ticket' component={Ticket}/>
          <Route exact path='/adminDashBoard' component={AdminDashBoard} />
          <Route exact path='/admin-landing' component={Adminlanding} />
          <Route exact path='/admin-register' component={AdminRegister} />
          <Route exact path='/admin-login' component={AdminLogin} />
          
        </Switch>
        <Footer/>
       
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
