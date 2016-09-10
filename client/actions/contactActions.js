import { UPDATE_MESSAGE } from './types.js';

export const updateMessage = ( message ) => {
  return {
    type: UPDATE_MESSAGE,
    payload: {
      message: message
    }
  };
};
