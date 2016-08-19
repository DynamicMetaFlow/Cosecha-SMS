import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { sendMessage, showAlert } from '../actions/index'

class SubmitButton extends Component {
  clickSubmit() {
    
    let phone_number = this.props.userInput.phone;
    
    // remove all non-digits

    let targ=phone_number.replace(/[^\d]/g,'');    

    // Check to make sure that a phone number is selected
    if ( this.props.userInput.phone === '' ) {
      this.props.showAlert('You must add a number');
    }
    // Check to make sure that a phone number is valid
    
    else if ( targ && targ.length===10 ) {
      this.props.sendMessage( this.props.userInput );
    }
    // Check to make sure the user has selected a message
    else if ( this.props.userInput.selectedMessage === 1 ) {
      this.props.showAlert('Please select a message to send');
    }

    else {
      this.props.showAlert('That doesn\'t look like a phone number');
    }
  }


  render() {
    return (
      <div className="btn">
        <button onClick={this.clickSubmit.bind(this)} >Send SMS</button>
      </div>
    );
  }
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        userInput: state.userInput
    };
};

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({
      sendMessage: sendMessage,
      showAlert: showAlert
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(SubmitButton);
