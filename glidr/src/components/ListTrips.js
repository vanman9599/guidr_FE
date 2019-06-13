import React from "react";
import Link from 'react-dom';
import { getTrips } from '../actions';
import { connect } from 'react-redux';


class ListTrips extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           trips: this.props.trips
       }
   }

   componentDidMount() {
   
     this.props.getTrips();
    
   }

   
   render() {
       console.log("Trips on props", this.props);
       console.log("Trips on state", this.state)
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
   { getTrips })(ListTrips);