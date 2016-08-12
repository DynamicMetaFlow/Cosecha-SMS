import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { sendMessage, showAlert } from '../actions/index'

class SubmitButton extends Component {
  clickSubmit() {
    this.props.showAlert('This is a cool new message.');
    this.props.sendMessage(this.props.userInput);
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
