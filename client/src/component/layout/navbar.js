import React, { Fragment } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon2.png';


const NavBar = () => {
  return (
    <Fragment>
      <nav className='navbar bg-dark sticky-top '>
        <div className='col-12'>
          <div className='container'>
            <div className="d-flex">
              <div className="mr-5 ">
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
                className='border-circle navbar-authmenu '
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
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;

// <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
//         <div className="container">

//             <a className="navbar-brand logo-image" href="index.html"><img src={Icon} alt="alternative"/></a>

//             <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
//                 <ul className="navbar-nav ml-auto navbar-nav-scroll">
//                     <li className="nav-item">
//                         <a className="nav-link" href="#header">Home</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#projects">Projects</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#services">Services</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#about">About</a>
//                     </li>
//                     <li className="nav-item dropdown">
//                         <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
//                         <ul className="dropdown-menu" aria-labelledby="dropdown01">
//                             <li><a className="dropdown-item" href="article.html">Article Details</a></li>
//                             <li><div className="dropdown-divider"></div></li>
//                             <li><a className="dropdown-item" href="terms.html">Terms Conditions</a></li>
//                             <li><div className="dropdown-divider"></div></li>
//                             <li><a className="dropdown-item" href="privacy.html">Privacy Policy</a></li>
//                         </ul>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#contact">Contact</a>
//                     </li>
//                 </ul>
//                 <span className="nav-item social-icons">
//                     <span className="fa-stack">
//                         <a href="#your-link">
//                             <i className="fas fa-circle fa-stack-2x"></i>
//                             <i className="fab fa-facebook-f fa-stack-1x"></i>
//                         </a>
//                     </span>
//                     <span className="fa-stack">
//                         <a href="#your-link">
//                             <i className="fas fa-circle fa-stack-2x"></i>
//                             <i className="fab fa-twitter fa-stack-1x"></i>
//                         </a>
//                     </span>
//                 </span>
//             </div>
//         </div>
//     </nav>
