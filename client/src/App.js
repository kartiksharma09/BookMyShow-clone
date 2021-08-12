import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/layout/navbar";
import AdminRegister from "./component/admin-auth/AdminRegister";
import AdminLogin from "./component/admin-auth/AdminLogin";
import UserLogin from "./component/user-auth/UserLogin";
import UserSignup from "./component/user-auth/UserSignup";

import Landing from "./component/layout/landing";
import Cards from "./component/layout/card";
import Footer from "./component/layout/footer";
import { AdminDashBoard } from "./component/Admin/adminDashBoard";

import { Adminlanding } from "./component/Admin/Adminlandin";

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Fragment className="App">
        {/* <Navbar /> */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/" component={Cards} />
        <Route exact path="/" component={Footer} />

        <Switch>
          <Route exact path="/admin-register" component={AdminRegister} />
          <Route exact path="/admin-login" component={AdminLogin} />
          <Route exact path="/user-login" component={UserLogin} />
          <Route exact path="/user-register" component={UserSignup} />
          <Route exact path="/adminDashBoard" component={AdminDashBoard} />
          <Route exact path="/admin-landing" component={Adminlanding} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
