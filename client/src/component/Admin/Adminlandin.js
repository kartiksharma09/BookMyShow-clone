import React, { Fragment } from 'react';
import theater from '../../images/main-theater.jpeg'
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Adminlanding = ({isAuthenticated}) => {
  if(isAuthenticated){
    return <Redirect to="/adminDashBoard" />
  }

  return (
    <Fragment>
      <div className='col-12'>
        <div className='container my-3'>
          <div className="d-flex justify-content-center align-item-center">
              <img src={theater} alt="threater" />
          </div>
          <div className="admin-landing-main ">
              <Link className="btn btn-danger Admin-auth mx-2" to="/admin-login">
                Login
              </Link>
              <Link className="btn btn-danger Admin-auth" to="/admin-register">
                Register
              </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Adminlanding.propTypes = {
  isAuthenticated:PropTypes.bool,
}


const mapStateToProps = state => ({
  isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Adminlanding);
