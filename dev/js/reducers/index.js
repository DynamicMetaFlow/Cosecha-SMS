import {combineReducers} from 'redux';
import ListReducer from './reducer-list';
import UserInputReducer from './user-input-reducer';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    list: ListReducer,
    userInput: UserInputReducer
});

export default allReducers
