import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Cinemas = ({searchedMovie:{releaseDetails,price}}) => {
  return (
    <Fragment>
      <div className="container">
        <div className="h3">Release Details</div>
        <div className="col-12 my-3">
          {!releaseDetails.length ? (
            <p className="h4">
              <i className="fas fa-sad-tear"></i> Not Available in theaters
            </p>
          ) : (
            <div className="row">
              {releaseDetails.map((cinema) => (
                <Fragment>
                  <div className="col-3 mb-2">
                    <div className="card release_details_sec">
                      <div className="card-body">
                        <div className="cinemaName_sec">
                          <div className="d-flex w-30">
                            <div>
                              <i className="fas fa-film"></i>
                            </div>
                            <div>{cinema.cinemaName}</div>
                          </div>
                          <div className="d-flex">
                            <div>
                              <i className="fas fa-map-marked-alt"></i>
                            </div>
                            <div>{cinema.locationOfCinema}</div>
                          </div>
                          <div className="d-flex">
                            <div>
                              <i className="fas fa-stopwatch"></i>
                            </div>
                            <div>{cinema.from}</div> <span>&nbsp;</span>
                            <div>{cinema.to}</div>
                          </div>
                          <div className="d-flex">
                            <div>
                              <i className="fas fa-calendar-alt"></i>
                            </div>
                            <div>{cinema.startDate}</div>
                            <div>to</div>
                            <div>{cinema.endDate}</div>
                          </div>
                        </div>
                        <div><i class="fas fa-dollar-sign"></i> {price}</div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Cinemas.propTypes = {
  auth: PropTypes.object.isRequired,
  searchedMovie: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  searchedMovie: state.movie.movie.searchedMovie
});

export default connect(mapStateToProps)(Cinemas);
