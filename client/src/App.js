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
<<<<<<< HEAD
=======
import {Ticket} from "./component/layout/ticket";
>>>>>>> 4cdf9226a06f111fb0b55429f8478a17f3390cef
import { Adminlanding } from './component/Admin/Adminlandin';
import Movie from './component/movies/Movie';


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
<<<<<<< HEAD
      <Fragment>
        <div className='App'>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/' component={Cards} />
          <Switch>
            <Route exact path='/adminDashBoard' component={AdminDashBoard} />
            <Route exact path='/admin-landing' component={Adminlanding} />
            <Route exact path="/movie" component={Movie} />
          </Switch>
          <Footer/>
        </div>
=======
      <Fragment className='App'>
        <Navbar />

        <Route exact path='/' component={Landing} />
        <Route exact path='/' component={Cards} />
        <Route exact path='/' component={Footer} />

        <Switch>
          <Route exact path='/final-ticket' component={Ticket}/>
          <Route exact path='/adminDashBoard' component={AdminDashBoard} />
          <Route exact path='/admin-landing' component={Adminlanding} />
        </Switch>
>>>>>>> 4cdf9226a06f111fb0b55429f8478a17f3390cef
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
