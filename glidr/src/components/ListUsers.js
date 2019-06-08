import React from "react";
import { getUsers, deleteUser } from '../actions';
import { connect } from 'react-redux';
import './App.css';

class ListUsers extends React.Component {
   constructor() {
       super();
       this.state = {
           users: []
       }
   }

   componentDidMount() {
       this.props.getUsers();
   }
   
   deleteUser = e => {
        e.preventDefault();
        this.props.deleteUser();
   }
   render() {
       console.log("Users on state", this.props);
       return this.props.users.map(user =>
           <div className="list-users">
               <div>
               {user.username}
               </div>
               <div>
               <i onClick={this.deleteUser} class="fas fa-trash-alt"></i>
                </div>
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
   { getUsers, deleteUser })(ListUsers);