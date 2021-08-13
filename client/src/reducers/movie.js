import {
    MOVIE_ERROR,
    GET_MOVIE,
    SEARCH_MOVIES,
    SEARCH_MOVIES_FAIL
} from "../actions/types";

const initialState = {
    movie:null,
    movies: [],
    loading: true,
    error: {}
}


const movie = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case GET_MOVIE:
            return { 
                ...state,
                movie: payload,
                loading: false
            }
        case SEARCH_MOVIES:
            return {
                ...state,
                movies: [payload],
                loading: false
            }
        
        case MOVIE_ERROR:
        case SEARCH_MOVIES_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}

export default movie;