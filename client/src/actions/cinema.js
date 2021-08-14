import axios from "axios";
import { setAlert } from "./alerts";
import {
    GET_CINEMA,
    CINEMA_ERROR,
    MOVIE_ASSIGNED,
    ASSIGN_ERROR
} from "./types";




export const getCurrentCinema = () => async dispatch => {
    try {
        const res = await axios.get('/api/admins/my-cinema');

        console.log(res.data, "current_cinema");
        dispatch({
            type: GET_CINEMA,
            payload: res.data
        });

    } catch (err) {
        console.log(err, "errror");
        dispatch({
            type: CINEMA_ERROR,
            // payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}



export const addCinema = (data) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify(data)

        const res = await axios.post('api/admins/admin/add-cinema', body, config);
        dispatch({
            type: GET_CINEMA,
            payload: res.data
        });

        dispatch(setAlert("Cinema added successfully", "success"))
    } catch (err) {
        console.log(err.response.data)
        dispatch(setAlert(err.response.data.msg, "danger"))

        dispatch({
            type: CINEMA_ERROR,
            payload: { msg: err.response.statusText }
        });
    }
}


export const assignMovie = (cinemaId, data) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify(data)

        const res = await axios.post(`/api/admins/cinema/addmovie/${cinemaId}`, body, config);
        dispatch({
            type: MOVIE_ASSIGNED,
            payload: res.data
        });

        dispatch(setAlert("Assigned Movie successfully", "success"))
    } catch (err) {
        console.log(err)
        dispatch(setAlert(err.response.data.msg, "danger"))

        dispatch({
            type: ASSIGN_ERROR,
            payload: { msg: err.response.statusText }
        });
    }
}