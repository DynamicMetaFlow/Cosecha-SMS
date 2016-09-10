import { combineReducers } from 'redux';
import contactReducer from './contact-reducer.js';

// We combine all reducers into a single object before updates data is dispached
// (sent) to store.
//
// The entire application's state (store) is now just whatever gets returned
// from all your reducers

const allReducers = combineReducers({
	contact: contactReducer
});

export default allReducers;
