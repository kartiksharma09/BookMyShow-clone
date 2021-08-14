import axios from "axios";
import { setAlert } from "./alerts";
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    CLEAR_PROFILE,
    ADMIN_CALLED,
    LOGOUT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

//load user

export const loadUser = () => async(dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get("/api/auth");

        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        console.log("auth error", err);
        dispatch({
            type: AUTH_ERROR,
        });
    }
};

// Register Action //
export const RegisterAction =
    ({ name, email, password, isAdmin }) =>
    async(dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ name, email, password, isAdmin });

        try {
            const res = await axios.post("/api/users/signup", body, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });

            console.log("register", res.data);
            dispatch(loadUser());
            dispatch(setAlert("Registered Successfully", "success"));
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach((error) => {
                    dispatch(setAlert(error.msg, "danger"));
                });
            }

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch(setAlert("User already exists", "danger"));
        }
    };

// adminLogin function //

export const adminLogin = (email, password) => async(dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post("/api/admins/admin/login", body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        console.log(err.response, "errorrdksfls");
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "danger"));
            });
        }
        dispatch({
            type: LOGIN_FAIL,
        });

        dispatch(setAlert("Invalid creadentials", "danger"));
    }
};



// user loging action

export const userLogin = ({ email, password }) => async(dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post("api/users/login", body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "danger"));
            });
        }
        dispatch({
            type: LOGIN_FAIL,
        });

        dispatch(setAlert("Invalid creadentials", "danger"));
    }
};


// LOGOUT//
export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
};