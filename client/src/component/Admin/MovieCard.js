import React,{Fragment} from "react";

export const MovieCard = ({movies}) => {
  return (
    <Fragment>
      <div className="col-12">
        <div className="container">
          <div className="row">
              {movies.length === 0 ? (<Fragment>No Movies Found</Fragment>) : (movies.map(movie=><div className="col-3">
              <div
                className="card movie-image admin_movies_card my-3"
                style={{
                  backgroundImage: `url(${movie.posterUrl})`,
                }}
              >
                <div className="card-body"></div>
                <div className="card-footer">
                  <h5 className="movie-title">{movie.movieName}</h5>
                  <h6 className="card-text movie-genro"><strong>{movie.genre}</strong></h6>
                  <h6 className="card-text movie-genro"><strong>{movie.language}</strong></h6>
                </div>
              </div>
            </div>)) }
          </div>
        </div>
      </div>
    </Fragment>
  );
};


export default MovieCard