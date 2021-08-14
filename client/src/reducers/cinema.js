import {REGISTER_FAIL,
    ASSIGN_ERROR,
    MOVIE_ASSIGNED,
    GET_CINEMA,
    CINEMA_ERROR
} from "../actions/types";

const initialState = {
    cinema:null,
    movies: [],
    loading: true,
    error: {}
}


export default (state = initialState, action) => {
    const { type, payload } = action;
    console.log(action)
    switch (type) {
        case GET_CINEMA:
            return { 
                ...state,
                cinema: payload,
                loading: false
            }
        case MOVIE_ASSIGNED:
            return {
                ...state,
                movies: [payload,...state.cinema.Movies],
                loading: false
            }
        case ASSIGN_ERROR:
        case CINEMA_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}