import {
FETCH_USER_START,
FETCH_USER_SUCCESS,
FETCH_USER_ERROR,
ADD_USER_START,
ADD_USER_SUCCESS,
ADD_USER_ERROR,

ADD_PROFILE_START,
ADD_PROFILE_SUCCESS,
ADD_PROFILE_ERROR,
DELETE_USER_START,
DELETE_USER_SUCCESS,
DELETE_USER_ERROR,

//LIST ALL USERS
FETCH_USERS_START,
FETCH_USERS_SUCCESS,
FETCH_USERS_ERROR,

FETCH_TRIP_START,
FETCH_TRIP_SUCCESS,
FETCH_TRIP_ERROR,
ADD_TRIP_START,
ADD_TRIP_SUCCESS,
ADD_TRIP_ERROR,
EDIT_TRIP_START,
EDIT_TRIP_SUCCESS,
EDIT_TRIP_ERROR,
DELETE_TRIP_START,
DELETE_TRIP_SUCCESS,
DELETE_TRIP_ERROR
} from '../actions';

const initialState = {
    users: [],
    fetchingUsers: false,
    addingUser: false,
    updatingUser: false,
    deletingUser: false,
    error: null, 
    id: null
  }
 
 
 /*
   You'll only need one smurf reducer for this project.
   Feel free to export it as a default and import as rootReducer. 
   This will guard your namespacing issues.
   There is no need for 'combineReducers' in this project.
   Components can then read your store as, `state` and not `state.fooReducer`.
 */
 function reducer(state = initialState, action){
   console.log("reducer", action)
   switch(action.type){
     case FETCH_USERS_START:
       return {
         ...state, 
         error: "",
         users: [], 
         fetchingUsers: true
       };
     case FETCH_USERS_SUCCESS:
       return{
         ...state, 
         error: "",
         users: action.users, 
         fetchingUsers: false
       };
     case FETCH_USERS_ERROR:
       return{
         ...state, 
         error: "", 
         fetchingUsers: false
       }
     case ADD_USER_START:
     return{
       ...state, 
       error: '', 
       addingUser: true
     }
     case ADD_USER_SUCCESS:
         return{
           ...state, 
           error: '', 
           addingUser: false, 
           users: [...state.users, action.users]
         }
     case ADD_USER_ERROR:
       return{
         ...state, 
         error: "", 
         addingUser: false
       }
       case ADD_PROFILE_START:
       return{
         ...state, 
         error: "", 
         updatingUser: false
       }
       case ADD_PROFILE_SUCCESS:
        return{
          ...state, 
          error: '', 
          updatingUser: true, 
          profile: [...state.profile, action.profile]
          
        }
        case ADD_PROFILE_ERROR:
          return{
            ...state, 
            error: 'Error updating profile', 
            updatingUser: false, 

          }
     default: 
     return state 
   }
 }
 
 export default reducer;