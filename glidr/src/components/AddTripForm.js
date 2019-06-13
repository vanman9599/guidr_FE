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
    trip: {
      user_id: '', // REQUIRED
      adventure_type: '',
      date: '',
      description: '',
      duration: '',
      location: '',
      professional: '',
      title: ''
  }
}


 addTrip = e => {
    e.preventDefault();
    const newTrip = { user_id: localStorage.getItem("user_id"), 
                      adventure_type: this.state.adventure_type, 
                     date: this.state.date, 
                     description: this.state.description, 
                    duration: this.state.duration,
                    location: this.state.location, 
                    professional: this.state.professional,
                    title: this.state.title
                    }
    this.props.addTrip(newTrip)
    .then(() => {
      console.log("props", this.props);
      this.props.history.push('/list-trips');
    })
    .catch(err => console.log(err));
    console.log("Add Trip Form: State", this.state);
    console.log("Add Trip Form: Props", this.props);
    this.setState({user_id: '', adventure_type: '', description: '', duration: '', location:'', professional:'', title: '', date: ''})
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
         <input onChange={this.handleChange} value={this.state.description} type="text" name="description" placeholder="Description" />
         <input onChange={this.handleChange} value={this.state.duration} type="number" name="duration" placeholder="Duration" />
         <input onChange={this.handleChange} value={this.state.location} type="text" name="location" placeholder="Location" />
         <input onChange={this.handleChange} value={this.state.title} type="text" name="title" placeholder="Title" /> 
         <input type="radio" name="professional" value="1" selected />Proressional
         <input type="radio" name="professional" value="0" />Private
         
         <button  onChange={this.handleChange}  onClick={this.addTrip}>Add Trip</button>
         
       
      </div>
    );
  };

}
const mapStateToProps = state => {
  return{
        trip: {
          user_id: localStorage.getItem("user_id"), 
        adventure_type: state.adventure_type, 
        date: state.date, 
        description: state.description, 
        duration: state.duration, 
        location: state.location, 
        professional: state.date, 
        title: state.title
        }
    }
}
export default connect(
  mapStateToProps,
  { addTrip })(AddTripForm);