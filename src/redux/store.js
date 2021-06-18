import {createStore, applyMiddleware} from 'redux';
import reactThunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(
    reducers,
    {},
    applyMiddleware(reactThunk)
);

export default store;