import React, { Fragment, useEffect } from 'react';
import { Link,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import  Adminlanding from './component/Admin/Adminlandin'
import Navbar from './component/layout/navbar'
import Footer from './component/layout/footer';
import Cards from './component/layout/card';
import AdminRegister from "./component/admin-auth/AdminRegister"
import AdminLogin from './component/admin-auth/AdminLogin';
import AddMovie from './component/Admin/AddMovie'

import Landing from './component/layout/landing';
import Tickets from './component/TicketLayout/ticket';
import Movie from './component/movies/Movie'
import {Ticket} from './component/layout/ticket'
import {Provider} from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken' 

import { AdminDashBoard } from './component/Admin/adminDashBoard';
import Alerts from "./component/layout/Alerts";
import HomePage from './component/User/HomePage';
import {getAllMovies} from './actions/movie';

import AdminRoute from "./component/routing/AdminRoute";



if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getAllMovies());
  },[])

  return (
    <Provider store={store}>
    <Router>
      <Fragment>
      <Alerts />
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Route exact path='/' component={Cards} />
        <Switch>
          <Route exact path='/admin-landing' component={Adminlanding} />
          <Route exact path='/admin-register' component={AdminRegister} />
          <Route exact path='/admin-login' component={AdminLogin} />
          <Route exact path="/movie/:movieName" component={Movie} />
          <Route exact path="/homepage" component={HomePage} />
          <AdminRoute exact path='/addMovie' component={AddMovie} />
          <AdminRoute exact path='/adminDashBoard' component={AdminDashBoard} />
        </Switch>
        <Footer/>
      </Fragment>
    </Router>
    </Provider>
  );
}
export default App;
