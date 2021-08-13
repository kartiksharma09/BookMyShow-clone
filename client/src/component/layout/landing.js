import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const Landing = ({isAuthenticated}) => {
  if(isAuthenticated){
    return <Redirect to="/adminDashBoard" />
  }
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated:PropTypes.bool,
}


const mapStateToProps = state => ({
  isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);
