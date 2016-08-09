import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onPhoneChange } from '../actions/index';

class PhoneInput extends Component {

  onPhoneChange(event){

    this.props.onPhoneChange(event.target.value);

  }

  render() {
    return (
      <input
        className="form-control"
        type="text"
        value={this.props.userInput.phone}
        placeholder="Phone Number"
        onChange={this.onPhoneChange.bind(this)}
        />
    )
  }
}

function mapStateToProps(state) {
  return {
    userInput: state.userInput
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
      {onPhoneChange: onPhoneChange},
      dispatch
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(PhoneInput);
