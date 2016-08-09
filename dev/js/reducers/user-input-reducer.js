export default function (state={phone: '', selectedMessage: 1}, action) {
  switch (action.type) {
    case 'PHONE_INPUT_CHANGED':
      return Object.assign({}, state, {phone: action.payload});
      break;
    case 'MESSAGE_SELECTED':
      return Object.assign({}, state, {selectedMessage: action.payload});
    case 'SEND_MESSAGE':
      // Logic to send SMS message would go here
      // Would most likely use Twilio



      return state;
    default:
      return state;

  }
  return state;
}
