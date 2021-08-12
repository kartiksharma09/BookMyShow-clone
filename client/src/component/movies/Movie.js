import React,{ Fragment} from 'react'
import PropTypes from 'prop-types'

const Movie = props => {
    return (
        <Fragment>
           <div className="container-fluid movie-bg-sec" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url("https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-age-of-ultron-et00024757-09-03-2017-07-09-00.jpg")`}}>
               <div className="container">
                   <div className="row">
                        <div className="col-4"> 
                            <div className="card movie-image my-3" style={{backgroundImage: `url("https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-age-of-ultron-et00024757-09-03-2017-07-09-00.jpg")`}}>
                                <div className="card-body"></div>
                                <div className="card-footer">
                                    <h5 className="movie-title">Avengers Age of Ulton</h5>
                                    <p className="card-text movie-genro">Action,Advanture</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                                <div className="card movie-details_sec my-3">
                                    <div className="card-body">
                                    <h1 className="movie-title">Avengers Age of Ultron</h1>
                                </div>
                                <div className="d-flex w-50 justify-content-around duration_sec mb-1">
                                        <div>03 h:02m</div>
                                        <i className="far fa-dot-circle"></i>
                                        <div>action</div>
                                        <div>english</div>
                                </div>
                                <div className="card-footer text-center border-top-0">
                                <button type="button" className="btn btn-danger btn-lg w-50">Book<i className="bi-check2-circle"></i></button>
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
               <p>Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.</p>

               <div className="h3">
                   Cast
               </div>
               <div className="col-12">
                   <div className="row">
                       <div className="col-2">
                            <div className="card my-3 border-0">
                            <img src={"https://in.bmscdn.com/iedb/artist/images/website/poster/large/robert-downey-jr-1902-17-12-2018-02-26-59.jpg"} className="card-img-top actor_img_sec" alt="..."/>
                                <div className="card-body text-center">
                                    <div>
                                        Robert
                                    </div>
                                    <div>
                                        Tony Stark
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="col-2">
                            <div className="card my-3 border-0">
                            <img src={"https://in.bmscdn.com/iedb/artist/images/website/poster/large/chris-hemsworth-24185-24-03-2017-12-37-46.jpg"} className="card-img-top actor_img_sec" alt="..."/>
                                <div className="card-body text-center">
                                    <div>
                                        Chris Hemsworth
                                    </div>
                                    <div>
                                        Thor
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="col-2">
                            <div className="card my-3 border-0">
                            <img src={"https://in.bmscdn.com/iedb/artist/images/website/poster/large/robert-downey-jr-1902-17-12-2018-02-26-59.jpg"} className="card-img-top actor_img_sec" alt="..."/>
                                <div className="card-body text-center">
                                    <div>
                                        Robert
                                    </div>
                                    <div>
                                        Tony Stark
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="col-2">
                            <div className="card my-3 border-0">
                            <img src={"https://in.bmscdn.com/iedb/artist/images/website/poster/large/chris-evans-430-22-12-2017-10-13-37.jpg"} className="card-img-top actor_img_sec" alt="..."/>
                                <div className="card-body text-center">
                                    <div>
                                       Chris Evans
                                    </div>
                                    <div>
                                        Captain America
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="col-2">
                            <div className="card my-3 border-0">
                            <img src={"https://images.news18.com/ibnlive/uploads/2021/08/1628064901_scarlett-johansson-in-black-widow-1200x800.jpg?impolicy=website&width=510&height=356"} className="card-img-top actor_img_sec" alt="..."/>
                                <div className="card-body text-center">
                                    <div>
                                    Scarlett Johansson
                                    </div>
                                    <div>
                                        Black Widow
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="col-2">
                            <div className="card my-3 border-0">
                            <img src={"https://in.bmscdn.com/iedb/artist/images/website/poster/large/robert-downey-jr-1902-17-12-2018-02-26-59.jpg"} className="card-img-top actor_img_sec" alt="..."/>
                                <div className="card-body text-center">
                                    <div>
                                        Robert
                                    </div>
                                    <div>
                                        Tony Stark
                                    </div>
                                </div>
                            </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="container">
               <div className="h3">
                   Release Details
               </div>
               <div className="col-12 my-3">
                   <div className="card w-50 release_details_sec">
                       <div className="card-body">
                            <div className="cinemaName_sec">
                                <div className="d-flex w-30">
                                    <div>
                                        <i className="fas fa-film"></i>
                                    </div>
                                    
                                    <div>
                                  
                                        dlf saket
                                    </div>
                                </div>
                                
                                <div className="d-flex">
                                    <div>
                                    <i className="fas fa-map-marked-alt"></i>
                                    </div>
                                  
                                    <div>
                                        Delhi ncr
                                    </div>
                                </div>
                               
                                <div className="d-flex">
                                    <div>
                                        <i className="fas fa-stopwatch"></i>
                                    </div>
                                   
                                    <div>
                                        18:00
                                    </div>
                                    <div>
                                        20:30
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                   
                                        <div>
                                            2021-08-14
                                        </div>
                                        to
                                        <div>
                                            2021-08-16
                                        </div>
                                </div>
                            </div>
                       </div>
                   </div>
                   
               </div>
           </div>
        </Fragment>
    )
}

Movie.propTypes = {

}


export default Movie
