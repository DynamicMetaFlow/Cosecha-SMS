import React, { Component } from 'react';
import { Layout, Panel, Button, Input, Checkbox } from 'react-toolbox';
import theme from './LandingPage.scss';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const style = {
	bg: {
		'background': 'rgba(250, 250, 250, 0.8)',
		'maxWidth': '400px',
		'padding': '30px',
		'margin': '0px auto'
	}
};

class LandingPage extends Component {

  render() {


    return (
      <Layout className="layout" theme={theme}>
        <Panel className="overlay" >
          <div style={style.bg}>
	          <h1>Cosecha SMS</h1>
	          <p>Select the message you want to send:</p>

						<br />
						
						<Checkbox label="Message 1" />
						<Checkbox label="Message 2" />
						<Checkbox label="Message 3" />

						<Input label="Phone Number" name="phone" type="tel" />

            <Link to={'/terms'} ><Button icon='add' label="Send SMS" raised primary /></Link>
          </div>
        </Panel>
      </Layout>
    )
  }
}

function mapStateToProps( state ) {
  return {

  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({

  }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps )(LandingPage);
