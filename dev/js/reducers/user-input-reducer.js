export default function (state={phone: '', selectedMessage: 1}, action) {
  switch (action.type) {
    case 'PHONE_INPUT_CHANGED':
      return Object.assign({}, state, {userPhone: action.payload});
      break;
    case 'MESSAGE_SELECTED':
      return Object.assign({}, state, {selectedMessage: action.payload});
    default:
      return state;

  }
  return state;
}
