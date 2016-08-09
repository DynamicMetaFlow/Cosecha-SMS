import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PhoneInput extends Component {

  onChange(event){
    console.log(event.target.value)
  }

  render() {
    return (
      <input
        className="form-control"
        type="text"
        value={this.props.userInput.phone}
        placeholder="Phone Number"
        onChange={this.onChange}
        />
    )
  }
}

function mapStateToProps(state) {
  return {
    userInput: state.userInput
  }
}

export default connect(mapStateToProps)(PhoneInput);
