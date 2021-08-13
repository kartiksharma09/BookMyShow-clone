import axios from "axios";
import { setAlert } from "./alerts";
import {
    GET_MOVIE,
    MOVIE_ERROR,
    SEARCH_MOVIES,
    SEARCH_MOVIES_FAIL
} from "./types";



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




//search for all movies
export const getAllMovies = () => async dispatch => {
    try {
        const res = await axios.get('/api/users/movies/allmovies');
        dispatch({
            type: SEARCH_MOVIES,
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
            type: SEARCH_MOVIES_FAIL,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


//search a movie by name



export const searchMovieByName = ({ movieName }) => async dispatch => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify(movieName);


    try {
        const res = await axios.post("/api/users/movies/searchmovie", body, config);

    } catch (err) {
        console.log(err);
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "danger"));
            });
        }

    }



};