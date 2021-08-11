import React, { Fragment } from 'react';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon.jpg';

const NavBar = () => {

  return (
    <Fragment>
      <nav className='navbar sticky-top '>
        <h1>
          <Link to='/'>
            <img src={Icon} alt="nav" className='nav-item1 mb-2' />
          </Link>
        </h1>
        <p className='nav-Links-item '>
          <Link to='/ticket' className='text-light nav-text nav-text-right'>
            Book tickets
          </Link>
        </p>

        <div className='dropdown nav-Links'>
        {/* <AccountCircleIcon style={{ fontSize: 50 }} /> */}
          
          <div className='dropdown-content'>
            <p><Link to='/register' className='text-dark text-decoration-none'>Register</Link></p>
            <p><Link to='/login' className='text-dark'>Login</Link></p>
            
            
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;