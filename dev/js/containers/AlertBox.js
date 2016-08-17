import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onShowMessage, showAlert, closeAlert } from '../actions/index';

class AlertBox extends Component {
 
  visibilityClass( x='' ){
    if (this.props.alerts.displayed) {
      return 'alert-box-open';
    }
    else if ( x === 'init' ) {
      return 'alert-box-init';
    }
    else {
      return 'alert-box-closed';
    }
  }

  closeAlert(){
    this.props.closeAlert();
  }

  render() {
    return (
      <div className={this.visibilityClass('init')}>
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
