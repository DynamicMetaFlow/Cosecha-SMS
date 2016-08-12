export const onPhoneChange = (phone) => {
    return {
        type: 'PHONE_INPUT_CHANGED',
        payload: phone
    };
};

export const onMessageSelect = (message) => {
  return {
    type: 'MESSAGE_SELECTED',
    payload: message
  };
};


export const sendMessage = (userInput) => {
  return {
    type: 'SEND_MESSAGE',
    payload: userInput
  };
};

export const VALIDATE_PHONE = 'VALIDATE_PHONE';

export const validatePhone = (phone) => {
  return {
    type: VALIDATE_PHONE,
    payload: phone
  };
};

export const ON_SHOW_MESSAGE = 'ON_SHOW_MESSAGE';

export const onShowMessage = (message) => {
  return {
    type: ON_SHOW_MESSAGE,
    payload: message
  };
};

export const showAlert = (message) => {
  return {
    type: 'SHOW_ALERT',
    payload: message
  };
};

export const closeAlert = () => {
  return {
    type: 'CLOSE_ALERT'
  };
};
