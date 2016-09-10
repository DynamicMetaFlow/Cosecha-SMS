import { UPDATE_MESSAGE, UPDATE_NUMBER } from './types.js';

export const updateMessage = ( message ) => {
  return {
    type: UPDATE_MESSAGE,
    payload: {
      message: message
    }
  };
};

export const updateNumber = ( number ) => {
  return {
    type: UPDATE_NUMBER,
    payload: {
      number: number
    }
  };
};
