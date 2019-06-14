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
       this.props.getProfile();
       console.log("Props on ShowProfile", this.props);
       this.setState({
           
            first_name: this.state.first_name, 
            last_name: this.state.last_name, 
            age: this.state.age, 
            certs: this.state.certs, 
            profile_text: this.state.profile_text, 
            years_of_exp: this.state.years_of_exp, 
            user_id: localStorage.getItem("user_id")
              
       })
   }
   render() {
       
       return (
           <div>
               {console.log("Props on SHowProfile", this.props)}
               <div>{this.props.first_name}</div>
               <div>UserId: {this.props.user_id}</div>
           </div>
       )
   }


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
   { getProfile })(ShowProfile);