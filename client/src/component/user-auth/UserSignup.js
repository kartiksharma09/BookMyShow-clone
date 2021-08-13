import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../css/form.css';

const UserSignup = () => {
  return (
    <Fragment>
      <div className='col-12 forms-row'>
        <div class='row p-4 h-100 justify-content-center align-items-center'>
          <form className='login user-auth'>
            <h3 className='text-center'>Register</h3>
            <input
              className='form-inputs'
              type='text'
              placeholder='Username'
              required
            />
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
            <input
              className='form-inputs'
              type='password'
              placeholder='Confirm Password'
              required
            />
            <p className='form-submit text-center btn btn-danger'>SignUp</p>
            <p className='text-dark'>
              Already have an account?{' '}
              <Link className='text-danger' to='/user-login'>
                LogIn
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UserSignup;
