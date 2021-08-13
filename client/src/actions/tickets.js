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

// Register Action //
const bookTickets = ({ seatNumber, watchers, Booking }) => async (dispatch) => {
    console.log("enetr the movie")
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const data = {
        Seats: seatNumber,
        watchers: watchers,
        bookingDate: Booking
    }
    const body = JSON.stringify(data);

    try {
        const res = await axios.post("/api/users/tickets/61135c4d9838d415aead85bb/6112ca4c3f28c617f0a7fa19", body, config);
        console.log(res.data)
        dispatch({
            type: BOOKING_SUCCESS,
            payload: res.data,
        });
        dispatch(setAlert("Ticket book Successfully", "success"));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "danger"));
            });
        }
        dispatch({
            type: BOOKING_FAIL,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

const CancelTickets = ({ ticketId }) => async (dispatch)=>{
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try { 
        const res = await axios.delete("/api/users/tickets/:ticketId",config);
        console.log(res)

        dispatch({
            type: CANCEL_TICKET,
            payload: res.data,
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

const ViewTickets = () => async (dispatch) => {
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
export default { bookTickets, CancelTickets, ViewTickets};