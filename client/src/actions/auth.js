import axios from 'axios';
import {setAlert} from './alerts';
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    CLEAR_PROFILE,
    ADMIN_CALLED,
    LOGOUT
} from "./types";
import setAuthToken from '../utils/setAuthToken';


//load user

// export const loadUser = () => async dispatch => {
//     if(localStorage.token){
//         setAuthToken(localStorage.token);
//     }    

//     try {
//         const res = await axios.get('/api/auth');

//         dispatch({
//             type:   USER_LOADED,
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type:AUTH_ERROR
//         });
//     }
// };  
