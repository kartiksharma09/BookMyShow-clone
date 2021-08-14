import axios from "axios";
import { setAlert } from "./alerts";
import {
GET_MOVIE,
<<<<<<< HEAD
  MOVIE_ERROR,
  GET_MOVIES
} from "./types";

// /api/users/movies/allmovies
//Get all Movies
export const getAllMovies = () => async dispatch => {

  try{
      const res = await axios.get('/api/users/movies/allmovies'); 
      // console.log(res.data)
      dispatch({
          type: GET_MOVIES,
          payload: res.data
      });

  }catch(err){
      console.log(err)
      dispatch({
          type: MOVIE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
      });
  }
}
=======
  MOVIE_ERROR
} from "./types";

>>>>>>> ceaead13ea6638bc0ba3664ae0dfeab01ac442b5


// Register Action //
export const addMovieAction =
  (data) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

<<<<<<< HEAD
    console.log(data,"from action")
    const body = JSON.stringify(data);

    try {
      const res = await axios.post("/api/admins/movies/addmovie", body, config);
=======
    const body = JSON.stringify(data);

    try {
      const res = await axios.post("api/admins/movies/addmovie", body, config);
>>>>>>> ceaead13ea6638bc0ba3664ae0dfeab01ac442b5
      dispatch({
        type: GET_MOVIE,
        payload: res.data,
      });
      dispatch(setAlert("Movie Added Successfully", "success"));
    } catch (err) {
<<<<<<< HEAD
      const errors = err.response.data;
      dispatch(setAlert(errors.msg, "danger"));
=======
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "danger"));
        });
      }
>>>>>>> ceaead13ea6638bc0ba3664ae0dfeab01ac442b5

      dispatch({
        type: MOVIE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
