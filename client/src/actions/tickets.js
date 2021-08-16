import axios from "axios";
import { setAlert } from "./alerts";
import {
    BOOKING_SUCCESS,
    BOOKING_FAIL,
    CANCEL_TICKET,
    CANCEL_TICKET_FAIL,
    TICKETS,
    TICKETS_NOTFOUND
} from "./types";


export const bookTickets = ({movieId,cinemaId, seatNumber, watchers, bookingDate }) => async (dispatch) => {
    console.log(movieId,cinemaId)
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const data = {
        Seats: seatNumber,
        watchers: watchers,
        bookingDate
    }
    const body = JSON.stringify(data);

    try {
        const res = await axios.post(`/api/users/tickets/${cinemaId}/${movieId}`, body, config);
        console.log(res.data,"hello bhai")
        dispatch({
            type: BOOKING_SUCCESS,
            payload: res.data,
        });
        dispatch(setAlert("Ticket book Successfully", "success"));
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(err.response.data.msg)
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.errors, "danger"));
            });
        }
        dispatch(setAlert(err.response.data.msg, "danger"));

        dispatch({
            type: BOOKING_FAIL,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const CancelTickets = (ticketId) => async (dispatch)=>{
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try { 
        const res = await axios.delete(`/api/users/tickets/${ticketId}`,config);
        console.log(res)

        dispatch({
            type: CANCEL_TICKET,
            payload: ticketId,
        });

        dispatch(setAlert("Ticket cancel Successfully", "success"));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "danger"));
            });
        }
        dispatch({
            type: CANCEL_TICKET_FAIL,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }   
}

export const ViewTickets = () => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.get("/api/users/tickets", config);
        console.log(res)

        dispatch({
            type: TICKETS,
            payload: res.data,
        });

        dispatch(setAlert("Tickets Found", "success"));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "danger"));
            });
        }
        dispatch({
            type: TICKETS_NOTFOUND,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

