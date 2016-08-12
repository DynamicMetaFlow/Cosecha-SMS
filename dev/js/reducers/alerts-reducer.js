export default function(state={
  alertMessage: 'This is the default message.',
  displayed: false,
  duration: 5}
  , action) {
  switch (action.type) {
    case 'SHOW_ALERT':
      return Object.assign({}, state, {
        alertMessage: action.payload,
        displayed: true
      });
      break;
    case 'CLOSE_ALERT':
      return Object.assign({}, state, {
        displayed: false
      });
      break;
    default:
      return state;
      break;
  }
  return state;
};
