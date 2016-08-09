import React from 'react';
import MessageList from '../containers/MessageList.js';
import PhoneInput from '../containers/PhoneInput.js';
require('../../scss/style.scss');

const App = () => (
  <div className="container">
    <h1>Cosecha SMS</h1>
    <p>Type in the phone number you would like to send a Cosecha SMS to:</p>
    <PhoneInput />
    <br />
    <MessageList />
    <br />
    <input type="submit" value="Send SMS" />
  </div>
);

export default App;
