import React from "react";
import { getProfile } from '../actions';
import { connect } from 'react-redux';

class ShowProfile extends React.Component {
   constructor() {
       super();
       this.state = {
           
               first_name: '', 
               last_name: '', 
               age: '', 
               certs: '', 
               profile_text: '', 
               years_of_exp: '', 
               user_id: ''
           
       }
   }

   componentDidMount() {
       this.props.getProfile(this.props.user_id);
       console.log("Props on ShowProfile", this.props);
       this.setState({

       })
   }
   render() {
       
       return (
           <div>
               <div>{this.props.first_name}</div>
               <div>UserId: {this.props.user_id}</div>
           </div>
       )
   }


}

const mapStateToProps = state => {
   return{
     profile: state.profile
   }
 }
 export default connect(
   mapStateToProps,
   { getProfile })(ShowProfile);