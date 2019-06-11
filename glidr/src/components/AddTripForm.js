import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
// import { Button } from "reactstrap";


import { addTrip } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class AddTripForm extends Component {

  state = 
  {
    user_id: '', // REQUIRED
    adventure_type: '',
    date: '',
    description: '',
    duration: '',
    location: '',
    professional: '',
    title: ''
  }
 addTrip = e => {
    e.preventDefault();
    const newTrip = { user_id: this.state.user_id, 
                      adventure_type: this.state.adventure_type, 
                     date: this.state.date, 
                     description: this.state.description, 
                    duration: this.state.duration,
                    location: this.state.location, 
                    professional: this.state.professional,
                    title: this.state.title
                    }
    this.props.addTrip(newTrip)
    this.setState({user_id: '', adventure_type: '', descrption: '', duration: '', location:'', professional:'', title: ''})
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
            
         <input onChange={this.handleChange} value={this.state.adventure_type} type="text" name="adventure_type" placeholder="Name" />
         <input onChange={this.handleChange} value={this.state.date} type="text" name="date" placeholder="MM/DD/YYYY" />
         <input onChange={this.handleChange} value={this.state.description} type="text" name="description" placeholder="Age" />
         <input onChange={this.handleChange} value={this.state.duration} type="text" name="duration" placeholder="Title" />
         <input onChange={this.handleChange} value={this.state.location} type="text" name="location" placeholder="Location" />
         <input onChange={this.handleChange} value={this.state.title} type="text" name="title" placeholder="Title" /> 
         <input type="hidden" name="user_id" value={this.state.user_id} />
         <input type="radio" name="professional" value="true" selected />Proressional
         <input type="radio" name="professional" value="false" />Private
         
         <button  onChange={this.handleChange}  onClick={this.onClick}>Add Trip</button>
         
       
      </div>
    );
  };

}
const mapStateToProps = state => {
  return{
        user_id: state.user_id, 
        adventure_type: state.adventure_type, 
        date: state.date, 
        description: state.description, 
        duration: state.duration, 
        location: state.location, 
        professional: state.date, 
        title: state.title
        }
}
export default connect(
  mapStateToProps,
  { addTrip })(AddTripForm);