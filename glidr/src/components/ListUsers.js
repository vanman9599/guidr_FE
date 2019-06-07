import React from "react";
import { getUsers } from '../actions';
import { connect } from 'react-redux';

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
   render() {
       console.log("Users on state", this.props);
       return this.props.users.map(user =>
           <div>
               <h1>{user.username}</h1>
               <p>UserId: {user.id}</p>
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