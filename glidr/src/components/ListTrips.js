import React from "react";
import Link from 'react-dom';
import { getUsers } from '../actions';
import { connect } from 'react-redux';

class ListTrips extends React.Component {
   constructor() {
       super();
       this.state = {
           trips: []
       }
   }

   componentDidMount() {
    const { match: { params } } = this.props;
       this.props.getTrips(params.user_id);
   }

   
   render() {
       console.log("Trips on props", this.props);
       return(
         <div>
            {this.props.trips.map(trip => {
                return(
                    <div>
                        {trip.title}
                    </div>
                )
            })}
         </div>
       ) 
   }


}

const mapStateToProps = state => {
   return{
     trips: state.trips
   }
 }
 export default connect(
   mapStateToProps,
   { getUsers })(ListTrips);