import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import axios from 'axios';
// import { Button } from "reactstrap";


import { addProfile } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just reme mber, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class AddProfileForm extends Component {

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
 componentDidMount(){
   const { match: { params }} = this.props;
    axios
    .get(`https://ls-guidr.herokuapp.com/api/profile/${params.id}`)
    .then(res => {
      console.log("Res Data", res)
      this.setState({
        profile: {
            user_id: res.id,
            first_name: res.first_name,
            last_name: res.last_name, 
            age: res.age,
            certs: res.certs,
            profile_text: res.profile_text,
            years_of_exp: res.years_of_exp
        }
        
      }) 
      
    })
     .catch(err => {
      console.log(err);
    })
 }

  handleClick = e => {
    e.preventDefault();
        const newProfile = { user_id: this.state.user_id,
            first_name: this.state.first_name, 
            last_name: this.state.last_name, 
            age: this.state.age, 
            certs: this.state.certs, 
            profile_text: this.state.profile_text, 
            years_of_exp: this.years_of_exp
           }
    this.props.addProfile(newProfile);
    this.setState({newProfile: {first_name: '', last_name: '', age: '', certs: '', profile_text:'', years_of_exp: '' , user_id: ''}})
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
          {console.log("State", this.state)}
      {console.log("Props", this.props)}  
      
         <input onChange={this.handleChange} value={this.state.first_name} type="text" name="first_name" placeholder="First Name" />
         <input onChange={this.handleChange} value={this.state.last_name} type="text" name="last_name" placeholder="Last Name" />
         <input onChange={this.handleChange} value={this.state.age} type="number" name="age" placeholder="Age" />
         <input onChange={this.handleChange} value={this.state.certs} type="text" name="certs" placeholder="Certs" />
         <input onChange={this.handleChange} value={this.state.profile_text} type="text" name="profile_text" placeholder="Description" />
         <input onChange={this.handleChange} value={this.state.years_of_exp} type="number" name="years_of_exp" placeholder="# of years experience" />
         <input type="hidden" value={this.state.user_id} name="user_id" />
         
         <button  onChange={this.handleChange}  onClick={this.handleClick}>Create Profile</button>
         
       
      </div>
    );
  };


}
const mapStateToProps = state => {
  return{
        first_name: state.first_name, 
        last_name: state.last_name, 
        age: state.age, 
        certs: state.certs, 
        profile_text: state.profile_text, 
        years_of_exp: state.years_of_exp,
        user_id: state.user_id
        }
}
export default connect(
  mapStateToProps,
  { addProfile })(AddProfileForm);