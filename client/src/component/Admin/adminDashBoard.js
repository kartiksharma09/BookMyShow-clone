import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
// import AddCinema from './AddCineme'

export const AdminDashBoard = ()=>{
  return (
    <Fragment>
      <div className='col-12 '>
        <div className=''>
          <div className='row'>
            <div className='col-3 '>
              <div
                className='nav flex-column nav-pills'
                id='v-pills-tab'
                role='tablist'
                aria-orientation='vertical'
              >
                <Link
                  className='nav-link active btn btn-danger my-1'
                  id='v-pills-home-tab'
                  data-toggle='pill'
                  role='tab'
                  aria-controls='v-pills-home'
                  aria-selected='true'
                >
                  Home
                </Link>
                <Link
                to="/addMovie"
                  className='nav-link btn btn-danger my-1'
                  id='v-pills-profile-tab'
                  data-toggle='pill'
                  role='tab'
                  aria-controls='v-pills-profile'
                  aria-selected='false'
                >
                  AddMovie
                </Link>
                <Link
                  className='nav-link btn btn-danger my-1'
                  id='v-pills-messages-tab'
                  data-toggle='pill'
                  role='tab'
                  aria-controls='v-pills-messages'
                  aria-selected='false'
                >
                  AddCinema
                </Link>
                <Link
                  className='nav-link btn btn-danger my-1'
                  id='v-pills-settings-tab'
                  data-toggle='pill'
                  role='tab'
                  aria-controls='v-pills-settings'
                  aria-selected='false'
                >
                  Delete your Agency
                </Link>
              </div>
            </div>
            <div className='col-9'>
              <div className='tab-content' id='v-pills-tabContent'>
                <div
                  className='tab-pane fade show active'
                  id='v-pills-home'
                  role='tabpanel'
                  aria-labelledby='v-pills-home-tab'
                >
                  
                </div>
                <div
                  className='tab-pane fade'
                  id='v-pills-profile'
                  role='tabpanel'
                  aria-labelledby='v-pills-profile-tab'
                >
                  ...
                </div>
                <div
                  className='tab-pane fade'
                  id='v-pills-messages'
                  role='tabpanel'
                  aria-labelledby='v-pills-messages-tab'
                >
                 {/* <AddCinema/> */}
                </div>
                <div
                  className='tab-pane fade'
                  id='v-pills-settings'
                  role='tabpanel'
                  aria-labelledby='v-pills-settings-tab'
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
