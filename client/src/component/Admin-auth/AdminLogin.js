import React, { useState, Fragment} from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { adminLogin } from "../../actions/auth";

import "../../css/form.css";

const AdminLogin = ({ auth: { user, loading, isAuthenticated },adminLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    adminLogin(email, password);
  };

  if (!loading && isAuthenticated ){
    return user && user.isAdmin && <Redirect to="/adminDashBoard" />;
  }

  return (
    <Fragment>
      <div className="col-12 forms-row">
        <div className="row p-4 h-100 justify-content-center align-items-center">
          <form className="login" onSubmit={(e) => onSubmit(e)}>
            <h3 className="text-center">Admin Log In</h3>
            <input
              className="form-inputs"
              type="email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Work Email"
              required
            />
            <input
              className="form-inputs"
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="form-submit text-center btn btn-danger"
            >
              LOGIN
            </button>
            <p className="text-white">
              Don't have an account?{" "}
              <Link className="text-warning" to="/admin-register">
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

AdminLogin.propTypes = {
  adminLogin:PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { adminLogin })(AdminLogin);
