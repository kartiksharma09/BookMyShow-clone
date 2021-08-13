import axios from "axios";
import { setAlert } from "./alerts";
import {
GET_MOVIE,
  MOVIE_ERROR
} from "./types";



// Register Action //
export const addMovieAction =
  (data) =>
  async (dispatch) => {
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
