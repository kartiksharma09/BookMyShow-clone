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

    console.log(data,"from action")
    const body = JSON.stringify(data);

    try {
      const res = await axios.post("/api/admins/movies/addmovie", body, config);
      dispatch({
        type: GET_MOVIE,
        payload: res.data,
      });
      dispatch(setAlert("Movie Added Successfully", "success"));
    } catch (err) {
      const errors = err.response.data;
      dispatch(setAlert(errors.msg, "danger"));

      dispatch({
        type: MOVIE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
