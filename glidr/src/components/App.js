import React, { Component } from 'react';
import './App.css';
import ListUsers from './ListUsers';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';
import AddUserForm from  './AddUserForm';


import { connect } from "react-redux";
// import { Button } from "reactstrap";
import { getUsers, addUser } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
 constructor(props){
  super(props);
  this.state = {
    users: []
  }
 };
 
 

 componentDidMount(){
   this.props.getUsers();
 }
  render() {
    return (
      <div className="App">
        <div className="nav-links">
          <NavLink to='/add-user-form'>Sign-up</NavLink>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/list-users">List Guides</NavLink>
        </div>
        {console.log("users: ", this.props.users)}
        <Route path='/list-users/' render={props => <ListUsers users={this.props.users} />} />
         
        <Route path='/add-user-form' render={props => <AddUserForm {...props} />} />
       
      </div>
    );
  };



}
const mapStateToProps = state => {
  return{
    users: state.users
  }
}
export default connect(
  mapStateToProps,
  { getUsers, addUser })(App);

