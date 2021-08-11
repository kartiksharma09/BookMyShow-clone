import React,{Fragment} from 'react'
import './App.css';
import Navbar from './component/layout/navbar'
import Tickets from './component/TicketLayout/ticket';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <section className="container">
          <switch>
            <Route exact path="/tickets" component={Tickets}/>
          </switch>
        </section>
      </Router>
      </div>
  );
}

export default App;
