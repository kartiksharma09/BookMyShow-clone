import React, { useState, Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import bookTickets from '../../actions/tickets';
import propTypes from 'prop-types'
import { connect } from 'react-redux';

const ViewReleasedCinema = ({ Cinemas }) =>{
    console.log("cinema", Cinemas)
    
    return (
        <Fragment>
            <div>
                <div class="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem"}}>
            <div class="card-header">CinemaName</div>
            <div class="card-body">
                <h5 class="card-title">Secondary card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>
        </Fragment>
    )
}
ViewReleasedCinema.propTypes = ({
    Cinemas:propTypes.array.isRequired,
})

const mapStateToProps = (state) => ({
    Cinemas: state.movie,
})

export default connect(mapStateToProps,{})(ViewReleasedCinema);