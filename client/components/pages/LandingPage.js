import React, { Component } from 'react';
import { Layout, Panel, Button, Input, RadioGroup, RadioButton } from 'react-toolbox';
import theme from './LandingPage.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMessage, updateNumber } from '../../actions/contactActions.js';

const style = {
	bg: {
		'background': 'rgba(250, 250, 250, 0.8)',
		'maxWidth': '300px',
		'padding': '30px',
		'margin': '0px auto'
	}
};

class LandingPage extends Component {

	handleRadioChange(value) {
		this.props.updateMessage(value)
	}

	handleInputChange( name, value ) {
		this.props.updateNumber( value );
	}

  render() {


    return (
      <Layout className="layout" theme={theme}>
        <Panel className="overlay" >
          <div style={style.bg}>
	          <h1>Cosecha SMS</h1>

						<ol>
							<li>Movimiento Cosecha: http://movimientocosecha.com</li>
							<li>Dignidad y Respeto: https://www.facebook.com/movimientocosecha</li>
							<li>Organiza Con Cosecha: http://wiki.movimientocosecha.com</li>
						</ol>

						<br />
						<RadioGroup name='message' value={this.props.contact.message} onChange={this.handleRadioChange.bind(this)} >
							<RadioButton label="Message 1" value={1} />
							<RadioButton label="Message 2" value={2} />
							<RadioButton label="Message 3" value={3} />
						</RadioGroup>

						<Input label="Phone Number" name="phone" type="tel" value={this.props.contact.number} onChange={this.handleInputChange.bind(this, 'phone')} />

            <Button icon='add' label="Send SMS" raised primary />
          </div>
        </Panel>
      </Layout>
    )
  }
}

function mapStateToProps( state ) {
  return {
		contact: state.contact
  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({
		updateMessage: updateMessage,
		updateNumber: updateNumber
  }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps )(LandingPage);
