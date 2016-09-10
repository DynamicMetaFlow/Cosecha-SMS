import React, { Component } from 'react';
import { Panel, Navigation, Input } from 'react-toolbox';
import { Link } from 'react-router';
import LanguagePicker from './LanguagePicker.js';
import Say from '../../i18n/Say.js';

const styles= {
  'panel': {
    'padding': '20px'
  },
  'nav': {
    'listStyleType': 'none'
  },
  'langOpt': {
    'float': 'left'
  },
  'langBlock': {
    'display': 'block',
    'position': 'relative'
  }
};

class SideBar extends Component {
  render() {
    return (
      <Panel>
        <div style={styles.panel}>
          
          <div className="language">
            
            <h3><Say text="language" /></h3>
            
            <LanguagePicker />

          </div>
          
          <Navigation type='vertical'>
            <ul style={styles.nav}>
              <li><Link to={'/profile'}><h3><Say text="profile" /></h3></Link></li>
              <li><Link to={'/contact'}><h3><Say text="contact" /></h3></Link></li>
              <li><Link to={'/logged-out'}><h3><Say text="logout" /></h3></Link></li>
            </ul>
          </Navigation>
        </div>
      </Panel>
    )
  }
}

export default SideBar;
