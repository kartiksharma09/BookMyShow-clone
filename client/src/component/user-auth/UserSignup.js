import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../css/form.css";
import { setAlert } from "../../actions/alerts";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RegisterAction } from "../../actions/auth"

const UserSignup = ({ setAlert, RegisterAction, auth:{loading, isAuthenticated} }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("password does not match", "danger");
    } else {
        const newUser = {
            name,
            email,
            password,
            isAdmin: false,
          };

          RegisterAction(newUser)
    }
  };

  if (!loading && isAuthenticated ){
    return <Redirect to="/search-movies" />;
  }

  return (
    <Fragment>
        <div className="container pt-5">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">Create Your Account</p>
      <form className="form user_form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group userFormGroup">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group userFormGroup">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group userFormGroup">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <div className="form-group userFormGroup">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/user-login">Sign In</Link>
      </p>
      </div>
    </Fragment>
  );
};



UserSignup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  RegisterAction:PropTypes.func.isRequired,
  auth:PropTypes.object,
};


const mapStateToProps = state => ({
    auth:state.auth
  })

export default connect(mapStateToProps, { setAlert, RegisterAction })(UserSignup);
