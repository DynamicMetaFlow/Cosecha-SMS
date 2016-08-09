import React from 'react';
import MessageList from '../containers/MessageList.js';
import PhoneInput from '../containers/PhoneInput.js';
require('../../scss/style.scss');

const App = () => (
  <div>
    <h1>Cosecha SMS</h1>
    <p>Type in the phone number you would like to send a Cosecha SMS to:</p>
    <PhoneInput />
    <hr />
    <MessageList />
  </div>
);

export default App;
