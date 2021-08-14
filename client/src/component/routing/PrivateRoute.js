import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated && !loading ? (
        <Component {...props} />
      ) : (
        <Redirect to="/user-login" />
      )
    }
  />
);

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
