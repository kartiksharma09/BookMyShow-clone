import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import movie from './movie';
import Tickets from './ticket';

export default combineReducers({
    alert,
    auth,
    movie,
    Tickets
});

