import React from "react"
import { connect } from "react-redux"

//import { fetchLinks } from "../actions/linkActions"

@connect((store) => {
  return {
    user: 'Celso',
    myList: ['fee', 'fi', 'fo', 'fum'],
    message: ''//,
    //links: store.links.links
  };
})
export default class Layout extends React.Component {

//   fetchLinks() {
//   this.props.dispatch(fetchLinks())
// }

handleMsgChange() {
  console.log('clicked')
}

handleClick() {
  console.log('clicked')
}


  render() {
    const { user, message, myList } = this.props;

    const list = myList.map((message) => {
      return (
        <li key={message}>{message}</li>
      )
    });

    return (<div className="container">
      <h1>Cosecha SMS</h1>
      <input type="text" value={message} onChange={this.handleMsgChange.bind(this)} placeholder="Message" />
      <button onClick={this.handleClick.bind(this)} >Send</button>


      <ul>{list}</ul>

    </div>)
  }
}
