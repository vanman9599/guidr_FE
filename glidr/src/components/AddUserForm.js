import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
// import { Button } from "reactstrap";
 import { create_UUID }  from '../utils';

import { addUser } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    
      name: '',
      username: '', 
      title: '', 
      age: '', 
      tagline: '', 
      experience: ''
    
  }

  onClick = e => {
    e.preventDefault();
    const newUser = { name: this.state.name, 
                        username: this.state.username, 
                     title: this.state.title, 
                     age: this.state.age, 
                    tagline: this.state.tagline, 
                    experience: this.state.experience}
    this.props.addUser(newUser)
    this.setState({name: '', username: '', title: '', age: '', tagline:'', experience:''})
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
            
         <input onChange={this.handleChange} type="text" name="name" placeholder="Name" />
         <input onChange={this.handleChange}  type="text" name="username" placeholder="Username" />
         <input onChange={this.handleChange}  type="number" name="age" placeholder="Age" />
         <input onChange={this.handleChange}  type="text" name="title" placeholder="Title" />
         <input onChange={this.handleChange}  type="text" name="tagline" placeholder="Tagline" />
         <input onChange={this.handleChange}  type="number" name="experience" placeholder="# of years experience" />
         <input type="hidden" name="userId" value={create_UUID()} />
         <button  onChange={this.handleChange}  onClick={this.onClick}>Add User</button>
         
       
      </div>
    );
  };


}
const mapStateToProps = state => {
  return{
        name: this.state.name, 
        username: this.state.username, 
        title: this.state.title, 
        age: this.state.age, 
        tagline: this.state.tagline, 
        experience: this.state.experience, 
        userId: this.state.userId
        }
}
export default connect(
  mapStateToProps,
  { addUser })(App);