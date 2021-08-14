import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import AddCinema from './AddCineme'
import { getCurrentCinema } from '../../actions/cinema'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard';
import { Spinner } from "../layout/Spinner";
import AssignMovieCinema from "./AssignMovieCinema"


const AdminDashBoard = ({ auth: { user }, Mycinema: { cinema, loading }, getCurrentCinema }) => {
  useEffect(() => {
    getCurrentCinema();
  }, [getCurrentCinema]);

  return loading && cinema == null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='col-12 '>
        <div className='row'>
          <div className='col'>
            {cinema !== null ? (<Fragment>
              <div className="card border-0">
                <div className="card-body">
                  <h3 className="card-title text-primary pb-2"><strong>Wel Come  {user.name}</strong></h3>
                  <h4 className="card-text text-secondary"><strong> Threater Name   : {cinema.cinemaName}</strong></h4>
                  <h4 className="card-text text-secondary"><strong> Situated At   : {cinema.locationOfCinema}</strong></h4>
                  <div
                className='nav flex-column nav-pills'
                id='v-pills-tab'
                role='tablist'
                aria-orientation='vertical'
              >
                <div className="form-row justify-content-between">
                <button class="btn btn-primary mt-3" style={{ width: '300px', display: 'block' }} type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                    Assign Movie To Your Cinema
                  </button>
                <Link
                  className='nav-link btn btn-danger my-1'
                  style={{ width: '200px', display: 'block' }}
                >
                  Delete your Agency
                </Link>
                </div>
                
                <button class="btn btn-primary mt-3" style={{ width: '200px', display: 'block' }} type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                    View Movies
                  </button>
              </div>
                  <div class="collapse mt-4" id="collapseExample1">
                   <MovieCard movies={cinema.Movies}/>
                  </div>
                  <div class="collapse mt-4" id="collapseExample2">
                   <AssignMovieCinema cinemaId={cinema._id} />
                  </div>

                </div>
              </div>
            </Fragment>) : (<Fragment>
              <div className>
                <Link
                  to="/addCinema"
                  className='nav-link btn btn-primary my-1'
                  id='v-pills-profile-tab'
                  data-toggle='pill'
                  role='tab'
                  aria-controls='v-pills-profile'
                  aria-selected='false'
                  style={{ width: '200px', display: 'block' }}
                >
                  ADD CINEMA
                </Link>
              </div>
            </Fragment>)}
          </div>
          <div className='col-auto'>
            <div
              className='nav flex-column nav-pills'
              id='v-pills-tab'
              role='tablist'
              aria-orientation='vertical'
            >
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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
};


AdminDashBoard.propTypes = {
  addMovieAction: PropTypes.func.isRequired,
  auth: PropTypes.object,
  Mycinema: PropTypes.object,
  getCurrentCinema: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  auth: state.auth,
  Mycinema: state.cinema
})


export default connect(mapStateToProps, { getCurrentCinema })(AdminDashBoard)