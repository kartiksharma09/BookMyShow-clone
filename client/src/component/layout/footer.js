import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <Fragment>
      <footer className='page-footer font-small '>
        {/* 1 */}

        <div className='container text-center text-md-left '>
          <div className='row '>
            <hr className='clearfix w-100 d-md-none pb-3' />

            <div className='col-md-2  my-5 '>
              <h5 className='text-light'>About us</h5>

              <ul className='list-unstyled'>
                <li>
                  <Link to='#!' className='footer_info'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    Mobile version
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    Android version
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    siteMap
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    Offers
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    Career
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    Value
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-md-2 my-5'>
              <h5 className='text-light'>Info</h5>

              <ul className='list-unstyled'>
                <li>
                  <Link to='#!' className='footer_info'>
                    {' '}
                    T & C
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    {' '}
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    {' '}
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    {' '}
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    {' '}
                    Theaters{' '}
                  </Link>
                </li>
                <li>
                  <Link to='/admin-landing' className='footer_info'>
                 
                    Agent Registration
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    Insurance Partner
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    {' '}
                    User Agreement
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3 */}

            <div className='col-md-2 my-5'>
              <h5 className='text-light'>Global Sites</h5>

              <ul className='list-unstyled'>
                <li>
                  <Link to='#!' className='footer_info'>
                    India
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    Singapore
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    {' '}
                    Malasia
                  </Link>
                </li>

                <li>
                  <Link to='#!' className='footer_info'>
                    Indonesia
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    Peru
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    Columbia
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4 */}

            <div className='col-md-2 my-5'>
              <h5 className='text-light'>Our Partner</h5>

              <ul className='list-unstyled'>
                <li>
                  <Link to='#!' className='footer_info'>
                    Goibibo
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='footer_info'>
                    Makemytrip
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-md-4 my-5'>
              <p className="text-light">
              There is no definition of beauty, but when you can see someone's spirit coming through, something unexplainable, that's beautiful to me.
              </p>
              <div className=''>
                <FacebookIcon style={{ fontSize: 40,fill:"white" }} />
                <TwitterIcon style={{ fontSize: 40,fill:"white"  }} />
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className='footer-copyright bg-dark test-light text-center py-3'>
          © 2021 Copyright:
          <Link
            to={{ pathname: 'https://www.linkedin.com/in/rohitsharma7065/' }}
            target='_blank'
          >
            Rohit
          </Link>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
