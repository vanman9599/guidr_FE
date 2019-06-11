import axios from 'axios';
import axiosWithAuth from '../axiosWithAuth';
//FETCH, ADD, EDIT, UPDATE A SINGLE USER
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const ADD_USER_START= "ADD_USER";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_ERROR = "ADD_USER_ERROR";
export const EDIT_USER_START = "EDIT_USER";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_ERROR = "EDIT_USER_ERROR";
export const DELETE_USER_START = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";

export const ADD_PROFILE_START = "ADD_PROFILE_START";
export const ADD_PROFILE_SUCCESS = "ADD_PROFILE_SUCCESS";
export const ADD_PROFILE_ERROR = "ADD_PROFILE_ERROR"


//LIST ALL USERS
export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const FETCH_TRIP_START = "FETCH_TRIP_START";
export const FETCH_TRIP_SUCCESS = "FETCH_TRIP_SUCCESS";
export const FETCH_TRIP_ERROR = "FETCH_TRIP_ERROR";
export const ADD_TRIP_START = "ADD_TRIP";
export const ADD_TRIP_SUCCESS = "ADD_tRIP_SUCCESS";
export const ADD_TRIP_ERROR = "ADD_TRIP_ERROR";
export const EDIT_TRIP_START = "EDIT_TRIP";
export const EDIT_TRIP_SUCCESS = "EDIT_TRIP_SUCCESS";
export const EDIT_TRIP_ERROR = "EDIT_TRIP_ERROR";
export const DELETE_TRIP = "DELETE_TRIP";
export const DELETE_TRIP_SUCCESS = "DELETE_TRIP_SUCCESS";
export const DELETE_TRIP_ERROR = "DELETE_TRIP_ERROR";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START});
    return axiosWithAuth()
    .post("https://ls-guidr.herokuapp.com/api/auth/login", creds)
    .then(res => {
      console.log("Res Data", res.data)
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUCCESS, users: res.data});
    })
    .catch(err => console.log(err));
}

export const getUsers = () => dispatch => {
    
      dispatch({
        type: FETCH_USERS_START
      });
      return axiosWithAuth()
      .get("https://ls-guidr.herokuapp.com/api/users")
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
          error: err.response
        });
      });
    
  }

  export const addUser = (user) => {
    return dispatch => {
      dispatch({
        type: ADD_USER_START
      });
      return axios
      .post("https://ls-guidr.herokuapp.com/api/auth/register", user)
      .then(res => {
        console.log("Res Data", res.data);
        dispatch({
          type: ADD_USER_SUCCESS,
          users: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ADD_USER_ERROR, 
          users: err.response
        });
      });
    }
  }

  export const editUser = user => {
      return dispatch => {
          dispatch({
              type: EDIT_USER_START
          });
          axios
          .put()
      }
  }
  
  export const addProfile = profile => dispatch => {
    // dispatch({type: action-type})
    // axios call
    console.log("Profile", profile);
      dispatch({
        type: ADD_PROFILE_START
      });
      axiosWithAuth()
      .put(`https://ls-guidr.herokuapp.com/api/profile/${profile.user_id}`, profile)
      .then(res => {
        console.log("Res Data", res.data);
        console.log("userID", res.data.id)
        dispatch({
          type: ADD_PROFILE_SUCCESS,
          profile: res.data
        });
      })
      .catch(err => {
        console.log("Profile UserID", )
        dispatch({
          type: ADD_PROFILE_ERROR, 
          error: err.response
        });
      });
    }
  

  export const addTrip = (trip) => {

  }

  export const editProfile = (profile) => {

  }

  export const getProfile = () => {

  }
  