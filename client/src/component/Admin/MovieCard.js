import React,{Fragment} from "react";

export const MovieCard = () => {
  return (
    <Fragment>
      <div className="col-12">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div
                className="card movie-image my-3"
                style={{
                  backgroundImage: `url("https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-age-of-ultron-et00024757-09-03-2017-07-09-00.jpg")`,
                }}
              >
                <div className="card-body"></div>
                <div className="card-footer">
                  <h5 className="movie-title">Avengers Age of Ulton</h5>
                  <p className="card-text movie-genro">Action,Advanture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieCard