import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import movie from './movie';
import Tickets from './ticket';
import cinema from './cinema'

export default combineReducers({
    alert,
    auth,
    movie,
    Tickets,
    cinema
});

