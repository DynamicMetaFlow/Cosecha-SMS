import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Logo from './Logo.js';
import theme from './RedAppBar.scss';
import { IconButton } from 'react-toolbox';
import { Link } from 'react-router';

const style={
  'textAlign': 'center',
  'margin': '0px auto'
};

const RedAppBar = ({ children, ...other }) => (
  <AppBar {...other} theme={theme}>
    {children}
    <Link to={'/home'} style={style}><Logo /></Link>
  </AppBar>
);

RedAppBar.propTypes = {
  children: PropTypes.node
};

export default RedAppBar;
