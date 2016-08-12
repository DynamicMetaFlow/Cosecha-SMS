import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onShowMessage, showAlert, closeAlert } from '../actions/index';

class AlertBox extends Component {



  visibilityClass(){
    if (this.props.alerts.displayed) {
      return 'showAlert alert-box';
    }
    else {
      return 'alert-box hidden hideAlert';
    }
  }

  closeAlert(){
    this.props.closeAlert();
  }

  render() {
    return (
      <div className={this.visibilityClass()}>
        <p>
          <a
            className="close-box"
            onClick={this.closeAlert.bind(this)}
            href="#"
          >
            X
          </a>
        </p>

        {this.props.alerts.alertMessage}
        <br />
        {this.props.userInput.phone}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    alerts: state.alerts,
    userInput: state.userInput
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
      {
        onShowMessage: onShowMessage,
        showAlert: showAlert,
        closeAlert: closeAlert
      },
      dispatch
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(AlertBox);
