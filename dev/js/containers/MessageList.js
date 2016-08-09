import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {selectUser} from '../actions/index'

class MessageList extends Component {
  renderList() {
    this.props.list.map((option) => {
      return (
        <p><input key={option.id} type="radio" name="message" /> {option.message}</p>
      )
    });
  }

  render() {
    return (
      <div>
        <p><input type="radio" name="message" value="1" /> Option 1</p>
        <p><input type="radio" name="message" value="2" /> Option 2</p>
        <p><input type="radio" name="message" value="3" /> Option 3</p>
        {this.renderList()}
      </div>
    );
  }
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        list: state.list
    };
};

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
// function matchDispatchToProps(dispatch){
//     return bindActionCreators({selectUser: selectUser}, dispatch);
// }

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(MessageList);
