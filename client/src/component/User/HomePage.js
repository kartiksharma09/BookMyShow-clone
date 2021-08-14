import React,{Fragment} from 'react'
import {connect} from 'react-redux';
import {Spinner} from '../layout/Spinner';
import propTypes from 'prop-types';

const HomePage = ({movie:{movies,loading}}) => {
    const posters = [];
    
    if(movies!==null && !loading){
        for(let movie = 0; movie<movies[0].movies.length; movie++){
            posters.push(movies[0].movies[Math.floor(Math.random() * movies[0].movies.length)].posterUrl)
        }
    }
  

    return movies !== null  && !loading && movies[0].movies.length>=3 ? (
        <Fragment>
                <div className="container-fluid">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={posters[0]} className="d-block w-100 landing_carousal" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src={posters[1]} className="d-block w-100 landing_carousal" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                            
                            <div className="carousel-item">
                                <img src={posters[2]} className="d-block w-100 landing_carousal" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </div>
                            
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>            
        </Fragment>
    ) : (<Fragment><Spinner/></Fragment>)
}

HomePage.propTypes = {
    movie: propTypes.object
}

const mapStateToProps = state => ({
    movie: state.movie
})

export default connect(mapStateToProps)(HomePage)
