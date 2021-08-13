import React, { Fragment } from 'react'
import { Link, Switch } from 'react-router-dom';
import './App.css';
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
import Movie from './component/movies/Movie'
import {Ticket} from './component/layout/ticket'
import {Provider} from 'react-redux';
import {AdminDashBoard} from './component/Admin/adminDashBoard';
import store from './store'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar/>
        <Route exact path='/' component={Landing} />
        <Route exact path='/' component={Cards} />
        <Switch>
          <Route exact path='/final-ticket' component={Ticket}/>
          <Route exact path='/adminDashBoard' component={AdminDashBoard} />
          <Route exact path='/admin-landing' component={Adminlanding} />
          <Route exact path="/movie" component={Movie}/>
          <Route exact path='/admin-register' component={AdminRegister} />
          <Route exact path='/admin-login' component={AdminLogin} />
          <Route exact path='/user-login' component={UserLogin} />
          <Route exact path='/user-register' component={UserSignup} />
          <Route exat path='/tickets' component={Tickets}/>
        </Switch>
        <Footer/>
      </Fragment>
    </Router>
    </Provider>
  );
}
export default App;
