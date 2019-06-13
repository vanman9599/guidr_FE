import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';
import ListUsers from './ListUsers';
import { Route } from 'react-router-dom';
import AddTripForm from  './AddTripForm';
import Register from './Register'; 
import Login from './Login';
import ShowProfile from './ShowProfile';
import ListTrips from './ListTrips';
import  PrivateRoute  from '../PrivateRoute';
import AddProfileForm from './AddProfileForm';



import { connect } from "react-redux";
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
  this.toggleNavbar = this.toggleNavbar.bind(this);
  this.state = {
    users: [], 
    collapsed: true
  }
 };
 
toggleNavbar(){
  this.setState({
    collapsed: !this.state.collapsed
  });
}

 componentDidMount(){
   this.props.getUsers();
   console.log("App props:", this.props);

 }

  render() {
    return (
      <div className="App">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Guidr</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                  <NavItem>
                      <NavLink href='/register'>Sign-up</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="/login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="/list-users">List Guides</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="/edit-profile">Edit Profile</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="/add-trip">Add Trip</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="/list-trips">List Trips</NavLink>
                  </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        
                  
        {/* <div className="nav-links">
          
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/list-users">List Guides</NavLink>
          <NavLink to='/register'>Sign-up</NavLink>/<NavLink exact to="/login">Login</NavLink>
          <NavLink to="/edit-profile">Edit Profile</NavLink>
          <NavLink to="/add-trip">Add Trip</NavLink>
          <NavLink to="/list-trips">List Trips</NavLink>
        </div> */}
        {console.log("users: ", this.props.users)}
        <PrivateRoute path='/list-users'  component={ListUsers} />
        <PrivateRoute path='/edit-profile' component={AddProfileForm} />
        <PrivateRoute path='/add-trip' component={AddTripForm}  />
        <PrivateRoute path='/list-trips' component={ListTrips} />
        <PrivateRoute path='/show-profile' component={ShowProfile} />
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
