import React from "react";

const ListUsers = (props) => {
   return props.users.map(user=>
   <div>
    <h1>{user.username}</h1>
    <p>UserId: {user.id}</p>
    
    
    
    </div>
    )
    
}

export default ListUsers;