import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// import lead from '../../images/lead.webp'

const Cards = () =>{
  return (
    <Fragment>
      <div className='col-12'>
        <div className='container my-3'>
          <Link to="" class='card bg-dark text-white'>
              {/* <img src={lead}/> */}
          </Link>
        </div>
      </div>
      
      <div className='col-12'>
        <div className='container my-4'>
          <div class='container-fluid'>
            <div class='scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2'>
              <div class='col-3 mr-3'>
                <div class='card card-block card-1'></div>
              </div>
              <div class='col-3 mr-3'>
                <div class='card card-block card-2'></div>
              </div>
              <div class='col-3 mr-3'>
                <div class='card card-block card-3'></div>
              </div>
              <div class='col-3 mr-3'>
                <div class='card card-block card-4'></div>
              </div>
              <div class='col-3 mr-3'>
                <div class='card card-block card-5'></div>
              </div>
              <div class='col-3 mr-3'>
                <div class='card card-block card-6'></div>
              </div>
              <div class='col-3 mr-3'>
                <div class='card card-block card-7'></div>
              </div>
              <div class='col-3 mr-3'>
                <div class='card card-block card-8'></div>
              </div>
              <div class='col-3 mr-3'>
                <div class='card card-block card-9'></div>
              </div>
              <div class='col-3 mr-3'>
                <div class='card card-block card-10'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
