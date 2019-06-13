import React from "react";
import Link from 'react-dom';
import { getUsers } from '../actions';
import { connect } from 'react-redux';

class ListUsers extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           users: []
       }
   }

   componentDidMount() {
       this.props.getUsers();
   }

   
   render() {
       console.log("Users on props", this.props);
       return(
            <div>
         {this.props.users.map(user => {
           return(<div>
               
            <div>{user.username}</div>
               
           </div>)
      } )}
            </div>
       ) 
       
   }


}

const mapStateToProps = state => {
   return{
     users: state.users
   }
 }
 export default connect(
   mapStateToProps,
   { getUsers })(ListUsers);