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
