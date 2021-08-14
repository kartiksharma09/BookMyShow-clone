import axios from "axios";
import { setAlert } from "./alerts";
import {

    GET_MOVIE,
    MOVIE_ERROR,
    SEARCH_MOVIE,
    NO_MOVIE,
    GET_MOVIES
} from "./types";

// /api/users/movies/allmovies
//Get all Movies
export const getAllMovies = () => async dispatch => {

    try {
        const res = await axios.get('/api/users/movies/allmovies');
        // console.log(res.data)
        dispatch({
            type: GET_MOVIES,
            payload: res.data
        });

    } catch (err) {
        console.log(err);
        dispatch({
            type: MOVIE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}





// Register Action //
export const addMovieAction =
    (data) =>
    async(dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify(data);
        console.log(body);
        try {
            const res = await axios.post("api/admins/movies/addmovie", body, config);
            dispatch({
                type: GET_MOVIE,
                payload: res.data,
            });
            dispatch(setAlert("Movie Added Successfully", "success"));
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach((error) => {
                    dispatch(setAlert(error.msg, "danger"));
                });
            }

            dispatch({
                type: MOVIE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    };


export const searchMovieByName = (
    movieName
) => async dispatch => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({
        movieName
    });

    console.log(body);
    try {
        const res = await axios.post("/api/users/movies/searchmovie", body, config);
        dispatch({
            type: SEARCH_MOVIE,
            payload: res.data
        });

    } catch (err) {
        console.log(err);
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "danger"));
            });
        }
        dispatch({
            type: NO_MOVIE,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}