import React,{Fragment,useEffect} from 'react'
import {connect} from 'react-redux';
import {Spinner} from '../layout/Spinner';
import propTypes from 'prop-types';
import {getAllMovies} from '../../actions/movie';

const HomePage = ({movie:{movies,loading},getAllMovies}) => {

  useEffect(() => {
    getAllMovies()
  }, [getAllMovies])

    const posters = [];
    
    if(movies.length && !loading){
        for(let movie = 0; movie<movies.length; movie++){
            posters.push(movies[movie].posterUrl)
        }
    }

    return !loading && movies.length>=3 ? (
        <Fragment>
           <div className="container pt-2 landing_sec">
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-pause="false">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>


          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="banner" style={{backgroundImage: `url(${posters[0]})`}}></div>
              <div className="carousel-caption d-none d-md-block">
                
               </div>
            </div>
          
            <div className="carousel-item ">
              <div className="banner" style={{backgroundImage: `url(${posters[1]})`}}></div>
              <div className="carousel-caption d-none d-md-block">
                  
              </div>
            </div>


            <div className="carousel-item ">
              <div className="banner" style={{backgroundImage: `url(${posters[2]})`}}></div>
              <div className="carousel-caption d-none d-md-block">
                
               </div>
            </div>
           

            

          </div>


          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
           </div>
        </Fragment>
    ) : (<Fragment><Spinner/></Fragment>)
}

HomePage.propTypes = {
    movie: propTypes.object,
    auth: propTypes.object,
    getAllMovies: propTypes.func,
}

const mapStateToProps = state => ({
    movie: state.movie,
    auth: state.auth
})

export default connect(mapStateToProps,{getAllMovies})(HomePage)
