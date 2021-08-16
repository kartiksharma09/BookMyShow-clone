import {
    BOOKING_FAIL,
    BOOKING_SUCCESS,
    CANCEL_TICKET_FAIL,
    CANCEL_TICKET,
    TICKETS_NOTFOUND,
    TICKETS
} from "../actions/types";

const initialState = {
    tickets: [],
    loading: true,
    error: {}
}

const Tickets = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case BOOKING_SUCCESS:
        case TICKETS:
            return {
                ...state,
                tickets: payload,
                loading: false
            }
        case CANCEL_TICKET:
            return {
                ...state,
                tickets: state.tickets.filter(ticket => ticket._id !== payload),
                loading: false
            };
        case TICKETS_NOTFOUND:
            return {
                ...state,
                tickets:[],
                loading: false
            }
        case BOOKING_FAIL:
        case CANCEL_TICKET_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}

export default Tickets;
