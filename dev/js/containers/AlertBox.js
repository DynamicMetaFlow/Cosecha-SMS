import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onShowMessage } from '../actions/index';

class AlertBox extends Component {

  onPhoneChange(event){
    this.props.onPhoneChange(event.target.value);
  }

  visibilityClass(){
    if (this.props.alerts.displayed) {
      return 'showAlert';
    }
    else {
      return 'hideAlert';
    }
  }

  render() {
    return (
      <div className={this.visibilityClass()}>
        {this.props.alerts.alertMessage}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    alerts: state.alerts
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
      {onShowMessage: onShowMessage},
      dispatch
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(AlertBox);
