import {
    SEARCH_MOVIES,
    SEARCH_MOVIES_FAIL
} from './types';

import axios from 'axios';
//search for all movies
export const getAllMovies = () => async dispatch => {
    try {
        const res = await axios.get('/api/users/movies/allmovies');
        dispatch({
            type: SEARCH_MOVIES,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: SEARCH_MOVIES_FAIL
        });
    }
};