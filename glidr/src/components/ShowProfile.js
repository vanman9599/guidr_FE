import React from "react";
import { getUsers } from '../actions';
import { connect } from 'react-redux';

class ShowProfile extends React.Component {
   constructor() {
       super();
       this.state = {
           profile: {
               first_name: '', 
               last_name: '', 
               age: '', 
               certs: '', 
               profile_text: '', 
               years_of_exp: '', 
               user_id: '';
           }
       }
   }

   componentDidMount() {
       this.props.getProfile();
   }
   render() {
       console.log("Users on props", this.props);
       return (
           <div>
               <div>{user.username}</div>
               <div>UserId: {user.id}</div>
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
   { getUsers })(ShowProfile);