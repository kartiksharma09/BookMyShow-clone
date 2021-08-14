import {REGISTER_FAIL,
    MOVIE_ERROR,
    GET_MOVIE,
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
<<<<<<< HEAD
                movies:[payload,...state.movies],
=======
>>>>>>> ceaead13ea6638bc0ba3664ae0dfeab01ac442b5
                loading: false
            }
        case MOVIE_ERROR:
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