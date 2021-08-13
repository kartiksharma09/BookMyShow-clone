import React, { Fragment } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon2.png';

const NavBar = ()=>{
  return (
    <Fragment>
      <nav className='navbar bg-dark sticky-top'>
        <div className='col-12'>
          <div className='container'>
            <div className="d-flex">
              <div className="mr-5">
                <h1>
                  <Link to='/'>
                    <img
                      src={Icon}
                      alt='nav'
                      className='nav-item1 icon-main mb-2'
                    />
                  </Link>
                </h1>
              </div>
              
            <div className='form-group mt-1 d-flex'>
            
              <input placeholder="search by movie name" type='text' className='form-control nav-search' id='usr' />
              
                {/* <SearchIcon className="mt-1 mr-5"  style={{ fontSize: 35,}}/> */}
                
              <p className="btn btn-danger ml-1">submit</p>
            </div>
            </div>

            <div className='dropdown nav-Links'>
              <p
                className='border-circle navbar-authmenu'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
              // aria-haspopup='true'
              // aria-expanded='false'
              >
                <AccountCircleIcon
                  className='dropdown-toggle'
                  style={{ fontSize: 50, fill: 'white' }}
                />
              </p>
              <div className='dropdown-menu mr-5'>
                <p className='ml-5 auth-links'>
                  <Link
                    to='/register'
                    className='text-dark text-center text-decoration-none'
                  >
                    Register
                  </Link>
                  <Link to="/tickeks">TicketBooking</Link>
                </p>
                <p className='ml-5 auth-links'>
                  <Link
                    to='/register'
                    className='text-dark text-center text-decoration-none'
                  >
                    Login
                  </Link>
                </p>
                <p className='ml-5 auth-links'>
                  <Link
                    to='/register'
                    className='text-dark text-center text-decoration-none'
                  >
                    About us
                  </Link>
                </p>
                <p className='ml-5 auth-links'>
                  <Link
                    to='/tickets'
                    className='text-dark text-center text-decoration-none'
                  >
                    BookTickets
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
