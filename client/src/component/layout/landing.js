import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Fragment>
      <div className='col-12'>
        <div className='row'>
          <section className='landing '>
            <div className='dark-overlay'>
              <div className='landing-inner  text-center'>
                <h1 className='landing-head '>
                  𝙺𝚎𝚎𝚙 C𝚊𝚕𝚖 A𝚗𝚍 Watch Movie at Our theaters
                </h1>
                <p className='lead text-light large'>
                  In my view, the only way to see a film remains the way the
                  filmmaker intended: inside a large movie theater with great
                  sound and pristine picture.
                </p>
                {/* <Route exact path='/' component={ticket} /> */}
              </div>
              <div className='form-group mt-1 d-flex justify-content-center'>
                <input
                  placeholder='search by movie name'
                  type='text'
                  className='form-control nav-search'
                  id='usr'
                />
                <p className='btn btn-danger ml-1'>submit</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
