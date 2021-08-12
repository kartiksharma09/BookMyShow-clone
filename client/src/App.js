import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/layout/navbar';
import Landing from './component/layout/landing';
import Cards from './component/layout/card';
import Footer from './component/layout/footer';
import { AdminDashBoard } from './component/Admin/adminDashBoard';
import { Adminlanding } from './component/Admin/Adminlandin';
import Movie from './component/movies/Movie';

function App() {
  return (
    <Router>
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
      </Fragment>
    </Router>
  );
}

export default App;
