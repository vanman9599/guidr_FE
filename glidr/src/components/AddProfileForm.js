import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
// import { Button } from "reactstrap";


import { editProfile } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class AddProfilerForm extends Component {

  state = {
    
      user_id: '',
      first_name: '', 
      last_name: '', 
      age: '', 
      certs: '', 
      profile_text: '', 
      years_of_exp: ''
    
  }

  /*
{
  "user_id": 2, // REQUIRED
  "first_name": "Tony",
  "last_name": "Stark",
  "age": "53",
  "certs": "Alpine Mountaineer, XBOX 360, Uphill Gardening",
  "profile_text": "loves to xbox on mountaintops, will help you change your mind",
  "years_of_exp": "40"
}

  */

  onClick = e => {
    e.preventDefault();
        const newProfile = { user_id: '',
            first_name: this.state.first_name, 
            last_name: this.state.last_name, 
            age: this.state.age, 
            certs: this.state.certs, 
            profile_text: this.state.profile_text, 
            years_of_exp: this.years_of_exp
           }
    this.props.editProfile(newProfile)
    this.setState({first_name: '', last_name: '', age: '', certs: '', profile_text:'', years_of_exp: '' , userId: ''})
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
            
         <input onChange={this.handleChange} value={this.state.name} type="text" name="first_name" placeholder="first_name" />
         <input onChange={this.handleChange} value={this.state.username} type="text" name="last_name" placeholder="last_name" />
         <input onChange={this.handleChange} value={this.state.age} type="number" name="age" placeholder="Age" />
         <input onChange={this.handleChange} value={this.state.title} type="text" name="certs" placeholder="Certs" />
         <input onChange={this.handleChange} value={this.state.tagline} type="text" name="profile_text" placeholder="Description" />
         <input onChange={this.handleChange} value={this.state.experience} type="number" name="years_of_exp" placeholder="# of years experience" />
         
         <button  onChange={this.handleChange}  onClick={this.onClick}>Create Profile</button>
         
       
      </div>
    );
  };


}
const mapStateToProps = state => {
  return{
        name: state.name, 
        username: state.username, 
        title: state.title, 
        age: state.age, 
        tagline: state.tagline, 
        experience: state.experience, 
        userId: state.userId
        }
}
export default connect(
  mapStateToProps,
  { editProfile })(AddProfilerForm);