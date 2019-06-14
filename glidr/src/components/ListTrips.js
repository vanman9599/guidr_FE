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
//    "id": 1,
//    "user_id": 2,
//    "adventure_type": "a lot of things",
//    "date": "Apr 15 2018",
//    "description": "California's most-visited national park stands out for its bevy of impressive waterfalls, such as Vernal Fall and Bridalveil Fall, as well as unique granite rock formations like the Half Dome and El Capitan. Whatever your itinerary may be, make sure to stop by the breathtaking Tunnel View Outlook",
//    "duration": "5 days",
//    "location": "Yosemite National Park",
//    "professional": 1,
//    "title": "Yosemite Sam"
   
   render() {
       console.log("Trips on props", this.props);
       console.log("Trips on state", this.state)
       return(
         <div>
             <h1>Trips</h1>
             <div className="trips">
            {this.props.trips.map(trip => {
                return(
                    <div className="trip-card">
                        <h2>{trip.title}</h2>
                        
                            <div className="trip-info"><strong>Adventure Type: </strong> {trip.adventure_type}</div>
                            <div className="trip-info"><strong>Date: </strong> {trip.date}</div>
                            <div className="trip-info"><strong>Duration: </strong> {trip.duration} days</div>
                            <div className="trip-info"><strong>Location: </strong> {trip.location} </div>
                            <div className="trip-info"><strong>Description: </strong> {trip.description}</div>
                            
                       
                    </div>
                )
            })}
            </div>
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