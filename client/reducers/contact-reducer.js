import { UPDATE_MESSAGE } from '../actions/types.js';

const defaultState = {
	message: ''
};

export default function(state = defaultState, action = {} ) {


  switch( action.type ){
    case UPDATE_MESSAGE:
      return Object.assign({}, state, {
				message: action.payload.message
      });
			break;


    default:
      return state;
  }

  return state;
};
