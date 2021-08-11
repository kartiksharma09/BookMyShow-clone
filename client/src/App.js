import React,{Fragment} from 'react'
import './App.css';
import Navbar from './component/layout/navbar'

function App() {
  return (
    <Fragment>
    <div className="App">

      <Router/>
      <Navbar />
    </div>
    </Fragment>
  );
}

export default App;
