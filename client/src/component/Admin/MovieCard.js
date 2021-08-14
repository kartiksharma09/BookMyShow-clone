import React, { Fragment } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

export const MovieCard = ({ movies, Movies }) => {


  const moviesId = [];
  for (let movie of movies) {
    moviesId.push(movie.movieId);
  }

  // console.log(moviesId)
  // const movieId;
  return (
    <Fragment>
      <div className="col-12">
        <div className="container">
          <div className="row">
            {moviesId.length === 0 ? (
              <Fragment>No Movies Found</Fragment>
            ) : (
              Movies.map((movie) => {
                return moviesId.includes(movie._id) &&
                (<Fragment>
                  <div className="col-3">
                  <div
                    className="card movie-image admin_movies_card my-3"
                    style={{
                      backgroundImage: `url(${movie.posterUrl})`,
                    }}
                  >
                    <div className="card-body"></div>
                    <div className="card-footer">
                      <h5 className="movie-title">{movie.movieName}</h5>
                      <h6 className="card-text movie-genro">
                        <strong>{movie.genre}</strong>
                      </h6>
                      <h6 className="card-text movie-genro">
                        <strong>{movie.language}</strong>
                      </h6>
                    </div>
                  </div>
                </div>
                </Fragment>)
              })
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

MovieCard.propTypes = {
  Movies: propTypes.array.isRequired,
  movies: propTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  Movies: state.movie.movies,
});

export default connect(mapStateToProps)(MovieCard);
