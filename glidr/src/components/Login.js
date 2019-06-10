import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
// import { Button } from "reactstrap";


import { login } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class Login extends Component {

  state = {
    
      username: '', 
      password: ''
  }

  

  hanldeClick = e => {
    e.preventDefault();
    const user = {  
                        username: this.state.username, 
                     password: this.state.password
                    }
    this.props.login(user).then(() => {
      this.props.history.push('/list-users')
    })

    this.setState({ username: '', password:''})
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
         <input onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="Password" />
        
         <button  onChange={this.handleChange}  onClick={this.handleClick}>Login</button>
         
       
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
  { login })(Login);