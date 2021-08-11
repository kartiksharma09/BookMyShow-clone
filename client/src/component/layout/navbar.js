import React, { Fragment } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon2.png';

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
        <AccountCircleIcon style={{ fontSize: 50 }} />
          
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
   
