import React,{ Fragment,useEffect} from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import {Spinner} from '../layout/Spinner';
import {searchMovieByName} from '../../actions/movie';
import {useParams,useHistory} from 'react-router-dom';
import {NotFound} from '../layout/NotFound';
const Movie = ({movie:{movie,loading},searchMovieByName}) => {

    let {movieName} = useParams();

    let history = useHistory()
   
    useEffect(()=>{
        searchMovieByName(movieName)
    },[searchMovieByName])

    return movie !== null && !loading ? (
        <Fragment>
           <div className="container-fluid movie-bg-sec" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url(${movie.searchedMovie.posterUrl})`}}>
               <div className="container">
                   <div className="row">
                        <div className="col-4"> 
                            <div className="card movie-image my-3" style={{backgroundImage: `url(${movie.searchedMovie.posterUrl})`}}>
                                <div className="card-body"></div>
                                <div className="card-footer">
                                    <h5 className="movie-title">{movie.searchedMovie.movieName}</h5>
                                    <p className="card-text movie-genro">{movie.searchedMovie.genre}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                                <div className="card movie-details_sec my-3">
                                    <div className="card-body">
                                    <h1 className="movie-title">{movie.searchedMovie.movieName}</h1>
                                </div>
                                <div className="d-flex w-50 justify-content-around duration_sec mb-1">
                                        <div>{movie.searchedMovie.timeDuration} mins</div>
                                        <i className="far fa-dot-circle"></i>
                                        <div>{movie.searchedMovie.genre}</div>
                                        <div>{movie.searchedMovie.language}</div>
                                        
                                </div>
                                <div className="card-footer text-center border-top-0">
                                <button type="button" className="btn btn-danger btn-lg w-50" onClick={()=>{history.push("/movie/cinemas")}}>Book<i className="bi-check2-circle"></i></button>
                                </div>
                            </div>
                                
                        </div>
                   </div>
               </div>
           </div>
           <div className="container my-3">
               <div className="h3">
                        About the movie
               </div>
               <p>{movie.searchedMovie.aboutTheMovie}</p>

               <div className="h3">
                   Cast
               </div>
               <div className="col-12">
                   <div className="row">
                       {movie.searchedMovie.cast.map(cast=>(
                           <Fragment>
                               <div className="col-3">
                                    <div className="card my-3 border-0">
                                        <img src={`${cast.characterImg}`} className="card-img-top actor_img_sec" alt="..."/>
                                        <div className="card-body">
                                            <div>
                                               {cast.actor}
                                            </div>
                                            <div>
                                                {cast.character}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </Fragment>
                       ))}
                   </div>
               </div>
           </div>
        </Fragment> 
    ) : (<Fragment><NotFound/></Fragment>)
}

Movie.propTypes = {
    movie: propTypes.object,
    searchMovieByName: propTypes.func
}

const mapStateToProps = (state) => ({
    movie: state.movie
})

export default connect(mapStateToProps,{searchMovieByName})(Movie)
