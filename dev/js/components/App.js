import React from 'react';
import MessageList from '../containers/MessageList.js';
import PhoneInput from '../containers/PhoneInput.js';
import SubmitButton from '../containers/SubmitButton.js';
import AlertBox from '../containers/AlertBox.js';
require('../../scss/style.scss');

const App = () => (
  <div className="container">
    <h1>Cosecha SMS</h1>
    <p className="centered">Just type in the phone number you would like to send a Cosecha SMS to:</p>
    <PhoneInput />
    <br />
    <MessageList />
    <br />
    <SubmitButton />

    <AlertBox />

  </div>
);

export default App;
