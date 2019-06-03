imporimport React, { Component } from 'react';
import './App.css';
import import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
// import { Button } from "reactstrap";


import { getSmurfs, addSmurf } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    
      name: '',
      age: '', 
      height: ''
    
  }

  onClick = e => {
    e.preventDefault();
    const newSmurf = { name: this.state.name, 
                        age: this.state.age, 
                      height: this.state.height}
    this.props.addSmurf(newSmurf)
    this.setState({name: '', age: '', height: ''})
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="App">
       {this.props.smurfs.map(smurf => {
         return(
           <div>
          <h1>{smurf.name}</h1>
          <ul>
            <li>Age: {smurf.age}</li>
            <li>Height: {smurf.height}</li>
          </ul>
          </div>
         );
       })}
      
         <input onChange={this.handleChange} type="text" name="name" placeholder="Name" />
         <input onChange={this.handleChange}  type="text" name="age" placeholder="Age" />
         <input onChange={this.handleChange}  type="text" name="height" placeholder="Height" />
         <button  onChange={this.handleChange}  onClick={this.onClick}>Add Smurf</button>
         
       
      </div>
    );
  };


componentDidMount(){
  this.props.getUsers();
}
}
const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}
export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf })(App);{ connect } from "react-redux";
import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
