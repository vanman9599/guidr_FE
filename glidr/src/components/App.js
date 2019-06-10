import React, { Component } from 'react';
import './App.css';
import ListUsers from './ListUsers';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';
import AddTripForm from  './AddTripForm';
import Register from './Register'; 
import Login from './Login';
import { create_UUID } from '../utils';
import  PrivateRoute  from '../PrivateRoute';
import AddProfileForm from './AddProfileForm';



import { connect } from "react-redux";
// import { Button } from "reactstrap";
import { getUsers, addUser , editProfile} from "../actions";
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
          <NavLink to='/register'>Sign-up</NavLink>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/list-users">List Guides</NavLink>
          <NavLink to='/register'>Sign-up</NavLink>/<NavLink exact to="/login">Login</NavLink>
          <NavLink to="/edit-profile">Edit Profile</NavLink>
          <NavLink to="/add-trip">Add Trip</NavLink>
        </div>
        {console.log("users: ", this.props.users)}
        <PrivateRoute path='/list-users'  component={ListUsers} />
        <PrivateRoute path='/edit-profile/:id' component={AddProfileForm} />
        <PrivateRoute path='/add-trip' component={AddTripForm} />
         <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        
       
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
  { getUsers, addUser, editProfile })(App);
