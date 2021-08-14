import React, { Fragment, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Adminlanding from './component/Admin/Adminlandin'
import Navbar from './component/layout/navbar'
import Footer from './component/layout/footer';
import AdminDashBoard from './component/Admin/adminDashBoard';
import Alerts from "./component/layout/Alerts";
import Cards from './component/layout/card';

import AdminRegister from './component/Admin-auth/AdminRegister'
import AdminLogin from './component/Admin-auth/AdminLogin';
import AddMovie from './component/Admin/AddMovie';
import AddCinema from './component/Admin/AddCineme';

import Landing from './component/layout/landing';
import Tickets from './component/TicketLayout/ticket';
import Movie from './component/movies/Movie';
import {Ticket} from './component/layout/ticket';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import AdminRoute from "./component/routing/AdminRoute";
import store from './store';

import UserSignup from './component/user-auth/UserSignup';
import UserLogin from './component/user-auth/UserLogin';
import ViewReleaseCinema from './component/TicketLayout/tickets';

if (localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment className='App'>
          <Alerts />
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/' component={Cards} />
          <Route exact path='/' component={Footer} />
          <Route exact path='/user-register' component={UserSignup} />
          <Route exact path='/user-login' component={UserLogin} />

          <Switch>
            <Route exact path='/admin-landing' component={Adminlanding} />
            <Route exact path='/admin-register' component={AdminRegister} />
            <Route exact path='/admin-login' component={AdminLogin} />
            <Route exact path="/tickets" component={Ticket} />
            
            <Route exact path="/ticketbook" component={Tickets} />
            <Route exact path="/searchMovie" component={Movie} />
            <Route exact path="/viewCinema" component={ViewReleaseCinema}/>

            <AdminRoute exact path='/addMovie' component={AddMovie} />
            <AdminRoute exact path='/addCinema' component={AddCinema} />
            <AdminRoute exact path='/adminDashBoard' component={AdminDashBoard} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;