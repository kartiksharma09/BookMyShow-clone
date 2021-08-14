import React, { Fragment } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import {Spinner} from '../layout/Spinner';
import {searchMovieByName} from '../../actions/movie';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import lead from '../../images/lead.webp'

const Cards = ({movie:{movies,loading},searchMovieByName}) => {
const History = useHistory()

  const SearchMovie = async(movieName)=>{
   
   await searchMovieByName(movieName)
    History.push(`/movie/${movieName}`)
  }

  return movies !== null  && !loading ? (   
    <Fragment>
      <div className='col-12'>
        <div className='container my-3'>
          <Link to="" class='card bg-dark text-white'>
              <img src={lead}/>
          </Link>
        </div>
      </div>

      <div className='col-12'>
        <div className='container my-4'>
          <div className='container-fluid'>
            <div className='scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2'>
              <div className='col-3 mr-3'>
                <div className='card card-block card-1'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-2'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-3'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-4'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-5'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-6'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-7'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-8'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-9'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-10'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="container">
          <div className="h2">
            Recommanded Movies
          </div>
          <div className="row">
            {movies.map(
              Mapmovie=>
              (<Fragment>
                   <div className="col-3">
                      <div className="card movie-image my-3" style={{backgroundImage: `url(${Mapmovie.posterUrl})`}}  onClick={()=>SearchMovie(Mapmovie.movieName)}>
                          <div className="card-body"></div>
                          <div className="card-footer">
                            <h5 className="movie-title">{Mapmovie.movieName}</h5>
                            <p className="card-text movie-genro">{Mapmovie.genre}</p>
                          </div>
                      </div>
                    </div>
            </Fragment>)
            )
            }
           
          </div>
        </div>
      </div>
    </Fragment>
  ) : (<Fragment><Spinner/></Fragment>);
};

Cards.propTypes = {
  movie: propTypes.object,
  searchMovieByName: propTypes.func
}

const mapStateToProps = state => ({
  movie: state.movie
})
export default connect(mapStateToProps,{searchMovieByName})(Cards);
