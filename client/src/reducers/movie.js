import {
    MOVIE_ERROR,
    GET_MOVIE,
    GET_MOVIES,
    SEARCH_MOVIE,
    NO_MOVIE
} from "../actions/types";

const initialState = {
    movie: null,
    movies: [],
    loading: true,
    error: {}
}


const movie = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_MOVIE:
        case SEARCH_MOVIE:
            return {
                ...state,
                movie: payload,
                movies: [payload, ...state.movies],
                loading: false
            };
        case GET_MOVIES:
            return {
                ...state,
                movies: payload,
                loading: false
            }

        case MOVIE_ERROR:
        case NO_MOVIE:
            return {
                ...state,
                movie:null,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}

export default movie;