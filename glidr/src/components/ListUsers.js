import React from "react";

const ListUsers = (props) => {
   return props.users.map(user=> <h1>{user.name}</h1>)
    
}

export default ListUsers;