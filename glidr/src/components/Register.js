import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
// import { Button } from "reactstrap";


import { addUser } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class Register extends Component {

  state = {
    
      username: '', 
      password: ''
    
  }

  

  onClick = e => {
    e.preventDefault();
    const newUser = {  username: this.state.username, 
                     password: this.state.password,
                    }
    this.props.addUser(newUser).then(() => {
        this.props.history.push('/protected');
    
    this.setState({username: '', password: ''})
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="add-user-form">
            
         
         <input onChange={this.handleChange} value={this.state.username} type="text" name="username" placeholder="Username" />
         <input onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="Passworde" />

         
         <button  onChange={this.handleChange}  onClick={this.onClick}>Register</button>
         
       
      </div>
    );
  };


}
const mapStateToProps = state => {
  return{
         
        username: state.username, 
        password: state.password
        }
}
export default connect(
  mapStateToProps,
  { addUser })(Register);