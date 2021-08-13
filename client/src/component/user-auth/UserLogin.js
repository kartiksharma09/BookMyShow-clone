import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../css/form.css';

const UserLogin = () => {
  return (
    <Fragment>
      <div className='col-12 forms-row'>
        <div class='row p-4 h-100 justify-content-center align-items-center'>
          <form className='login'>
            <h3 className='text-center'>Log In</h3>
            <input
              className='form-inputs'
              type='email'
              placeholder='Email'
              required
            />
            <input
              className='form-inputs'
              type='password'
              placeholder='Password'
              required
            />
            <p className='form-submit text-center btn btn-danger'>LOGIN</p>
            <p className='text-white'>
              Don't have an account?
              <Link className='text-warning' to='/admin-register'>
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  )
};


export default UserLogin;
