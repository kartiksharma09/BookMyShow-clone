import React, { Fragment, useEffect } from 'react'
import { Link, Switch } from 'react-router-dom';
import './App.css';
import ReactDOM from 'react-dom'
import Adminlanding from './component/Admin/Adminlandin'
import Navbar from './component/layout/navbar'
import Footer from './component/layout/footer';
import Cards from './component/layout/card';
import AdminRegister from "./component/Admin-auth/AdminRegister"
import AdminLogin from './component/Admin-auth/AdminLogin';
// import UserLogin from './component/user-auth/UserLogin';
// import UserSignup from './component/user-auth/UserSignup';
import Landing from './component/layout/landing';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import { AdminDashBoard } from './component/Admin/adminDashBoard';
import Alerts from "./component/layout/Alerts";
import AddMovie from './component/Admin/AddMovie';
import AdminRoute from "./component/routing/AdminRoute";
import Tickets from './component/TicketLayout/ticket';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

if (localStorage.token) {
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

          <Route exact path='/admin-register' component={AdminRegister} />
          <Route exact path='/admin-login' component={AdminLogin} />
          {/* <Route exact path='/user-login' component={UserLogin} /> */}
          {/* <Route exact path='/user-register' component={UserSignup} /> */}
          <Route exact path='/tickets' component={Tickets} />
          <Switch>
            <Route exact path="/admin-landing" component={Adminlanding} />
            <AdminRoute exact path='/addMovie' component={AddMovie} />
            <AdminRoute exact path='/adminDashBoard' component={AdminDashBoard} />
          </Switch>

        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
