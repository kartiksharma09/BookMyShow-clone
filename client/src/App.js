import './App.css';
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
        <Navbar/>
       
        <Route exact path="/" component={Landing}/>
        <Route exact path="/" component={Cards} />
        <Route exact path="/" component={Footer}/>
        
        <Switch>
            <Route exact path="/admin-landing" component={Adminlanding }/>
        </Switch>
      </Fragment>
      </Router>
      
    

    
  );
}

export default App;
