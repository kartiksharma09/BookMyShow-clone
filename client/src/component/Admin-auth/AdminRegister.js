import React, { useState } from "react";
import { Fragment } from "react";
import "../../css/form.css";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from '../../actions/alerts'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { RegisterAction } from "../../actions/auth"

const AdminRegister = ({setAlert, RegisterAction,auth:{user,loading, isAuthenticated}}) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { name, email, password, confirm_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      setAlert("Password does not match", "danger");
    } else {
      const newUser = {
        name,
        email,
        password,
        isAdmin: true,
      };
      RegisterAction(newUser);
    }
  };

  if (!loading && isAuthenticated ){
    return user && user.isAdmin && <Redirect to="/adminDashBoard" />;
  }
  


  return (
    <Fragment>
      <div className="col-12 forms-row">
        <div class="row p-4 h-100 justify-content-center align-items-center">
          <form className="login" onSubmit={e => onSubmit(e)}>
            <h3 className="text-center">Admin Register</h3>
            <input
              className="form-inputs"
              type="text"
              placeholder="Username"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className="form-inputs"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className="form-inputs"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className="form-inputs"
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={confirm_password}
              onChange={(e) => onChange(e)}
              required
            />
            <button type="submit" className="form-submit btn btn-danger">SignUp</button>
            <p className="text-white">
              Already have an account?{" "}
              <Link className="text-warning" to="/admin-login">
                LogIn
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

AdminRegister.propTypes = {
  Register:PropTypes.func.isRequired,
  setAlert:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
  auth:state.auth
})

export default connect(mapStateToProps,{setAlert,RegisterAction})(AdminRegister);
