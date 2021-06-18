import { combineReducers } from 'redux';
import usersReducer from './users';
import serviceReducer from './services';

export default combineReducers({
    usersReducer,
    serviceReducer
});