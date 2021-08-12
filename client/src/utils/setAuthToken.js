import axios from 'axios';

const setAuthToken = token =>{
    if (token) {
        axios.defaults.headers.common['cant-hack-token']=token;  
    }   else {
        delete axios.defaults.headers.common['cant-hack-token'];
    }
};
export default setAuthToken;
