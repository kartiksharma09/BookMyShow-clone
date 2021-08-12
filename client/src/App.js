import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/layout/navbar';
import Landing from './component/layout/landing';
import Cards from './component/layout/card';
import { Provider } from 'react-redux';
import store from './store';
// import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import Footer from './component/layout/footer';
import { AdminDashBoard } from './component/Admin/adminDashBoard';
import Tickets from './component/TicketLayout/ticket';

import { Ticket } from "./component/layout/ticket";
import { Adminlanding } from './component/Admin/Adminlandin';
import Movie from './component/movies/Movie';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // },[])


  return (
    <Provider store={store}>
      <Router>
        <Fragment>

          <div className='App'>
            <Navbar />

            <Route exact path='/' component={Landing} />
            <Route exact path='/' component={Cards} />
            <Route exact path='/' component={Footer} />
            <Route exact path='/tickets' component={Tickets} />

            <Switch>
              <Route exact path='/adminDashBoard' component={AdminDashBoard} />
              <Route exact path='/admin-landing' component={Adminlanding} />
              <Route exact path="/movie" component={Movie} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}
export default App;
