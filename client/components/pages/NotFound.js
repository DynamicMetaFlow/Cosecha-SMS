import React, { Component } from 'react';
import { Layout, Panel, Button } from 'react-toolbox';
import theme from './NotFound.scss';
import { Link } from 'react-router';


class NotFound extends Component {
  render() {
    return (
      <Layout className="layout" theme={theme}>
        <Panel className="notFound" >
          <div className="gradient">
            <h1>Page Not Found</h1>
            <p>Uh oh!</p>
            <p>Something went wrong! Trying going back to the home page.</p>
            <Link to={'/'} ><Button icon='add' raised primary >Go Home</Button></Link>
          </div>
        </Panel>
      </Layout>
    )
  }
}

export default NotFound;
