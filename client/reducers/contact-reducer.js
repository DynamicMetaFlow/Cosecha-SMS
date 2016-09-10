import { UPDATE_MESSAGE, UPDATE_NUMBER } from '../actions/types.js';

const defaultState = {
	message: 1,
	number: '602'
};

export default function(state = defaultState, action = {} ) {


  switch( action.type ){
    case UPDATE_MESSAGE:
      return Object.assign({}, state, {
				message: action.payload.message
      });
			break;

		case UPDATE_NUMBER:
			return Object.assign( {}, state, {
				number: action.payload.number
			});
			break;
    default:
      return state;
  }

  return state;
};
