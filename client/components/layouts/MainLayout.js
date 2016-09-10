import React, { Component } from 'react';
import { 
  Layout, 
  Panel, 
  NavDrawer, 
  Sidebar, 
  Checkbox, 
  IconButton 
} from 'react-toolbox';
import RedAppBar from '../partials/RedAppBar.js';
import SideBar from '../partials/SideBar.js';
import theme from './MainLayout.scss';
import QuestionNav from '../partials/QuestionNav';
import QuestionProgress from '../partials/QuestionProgress';


const styles = {
  page: {
    flex: '1',
    width: '100%',
    maxWidth: '800px',
    margin: '0px auto',
    padding: '2.8rem'
  }
};

class MainLayout extends Component {
  state = {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleDrawerPinned = () => {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  };

  toggleSidebar = () => {
    this.setState({ sidebarPinned: !this.state.sidebarPinned });
  };

  render() {
    return (
      <Layout theme={theme} >
        <NavDrawer
          active={this.state.drawerActive}
          pinned={this.state.drawerPinned}
          permanentAt='xl'
          onOverlayClick={this.toggleDrawerActive}
        >
          <SideBar />
        </NavDrawer>

        <Panel scrollY={true} >

          <RedAppBar><IconButton icon='menu' inverse={ true } onClick={ this.toggleDrawerActive }/> </RedAppBar>
          
          <div style={styles.page}>
            {this.props.children}
          </div>
          

        </Panel>
      </Layout>
    )
  }
}


export default MainLayout;
