import React, { Fragment } from 'react';
import theater from '../../images/main-theater.jpeg'
import {Link} from 'react-router-dom'

export const Adminlanding = () => {
  return (
    <Fragment>
      <div className='col-12'>
        <div className='container my-3'>
          <div className="d-flex justify-content-center align-item-center">
              <img src={theater}/>
          </div>
          <div className="admin-landing-main ">
              <Link className="btn btn-danger Admin-auth mx-2">
                Login
              </Link>
              <Link className="btn btn-danger Admin-auth">
                Register
              </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
