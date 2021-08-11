import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './component/layout/navbar'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
    </div>
    
  );
}

export default App;
