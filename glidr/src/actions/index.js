import axios from 'axios';

//FETCH, ADD, EDIT, UPDATE A SINGLE USER
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const ADD_PROFILE = "ADD_PROFILE";
export const ADD_PROFILE_SUCCESS = "ADD_PROFILE_SUCCESS";
export const ADD_PROFILE_ERROR = "ADD_PROFILE_ERROR";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_ERROR = "EDIT_PROFILE_ERROR";
export const DELETE_PROFILE = "DELETE_PROFILE";
export const DELETE_PROFILE_SUCCESS = "DELETE_PROFILE_SUCCESS";
export const DELETE_PROFILE_ERROR = "DELETE_PROFILE_ERROR";

//LIST ALL USERS
export const FETCH_USERS_START = "FETCH_USER_START";
export const FETCH_USERS_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USER_ERROR";

export const FETCH_TRIP_START = "FETCH_TRIP_START";
export const FETCH_TRIP_SUCCESS = "FETCH_TRIP_SUCCESS";
export const FETCH_TRIP_ERROR = "FETCH_TRIP_ERROR";
export const ADD_TRIP = "ADD_TRIP";
export const ADD_TRIP_SUCCESS = "ADD_tRIP_SUCCESS";
export const ADD_TRIP_ERROR = "ADD_TRIP_ERROR";
export const EDIT_TRIP = "EDIT_TRIP";
export const EDIT_TRIP_SUCCESS = "EDIT_TRIP_SUCCESS";
export const EDIT_TRIP_ERROR = "EDIT_TRIP_ERROR";
export const DELETE_TRIP = "DELETE_TRIP";
export const DELETE_TRIP_SUCCESS = "DELETE_TRIP_SUCCESS";
export const DELETE_TRIP_ERROR = "DELETE_TRIP_ERROR";

export const getUsers = () => {
    return dispatch => {
      dispatch({
        type: FETCH_USERS_START
      });
      axios
      .get("http://localhost:3000/users")
      .then(res => {
        console.log(" Data", res.data);
        dispatch({
          type: FETCH_USERS_SUCCESS,
          users: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_USERS_ERROR, 
          payload: err.response
        });
      });
    }
  }